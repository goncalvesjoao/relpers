var fs = require('fs');
var gulp = require('gulp');
var srcDir = './';
var configDir = './config/';
var application = require(configDir + 'application');
var browserSync = require('browser-sync').create();
var environment = 'development';
var distDir = './tmp' + application.appConfig[environment].baseHref;

gulp.task('build', build);
gulp.task('server', launchServer);
gulp.task('copy-public', copyPublic);
gulp.task('compile-css', compileCss);
gulp.task('compile-html', compileHtml);
gulp.task('mock-servers', launchMockServers)
gulp.task('watch', function() {
  gulp.watch(srcDir + 'css/**/*', compileCss);
  gulp.watch(srcDir + 'public/**/*.html', compileHtml);
  gulp.watch([srcDir + 'public/**/*', '!' + srcDir + 'public/**/*.html'], copyPublic);
});

var defaultTasks = ['copy-public', 'compile-html', 'compile-css', 'server', 'watch'];
if (fs.existsSync('./mockServers')) { defaultTasks.push('mock-servers'); }
gulp.task('default', defaultTasks);

// ********************************* PROTECTED *********************************

function build() {
  environment = 'production';
  distDir = '../docs' + application.appConfig[environment].baseHref;
  var webpackConfig = require(configDir + 'webpack')(environment);

  compileHtml();
  copyPublic();
  compileCss();

  gulp.src(srcDir + 'index.js')
      .pipe(require('webpack-stream')(webpackConfig))
      .pipe(gulp.dest(distDir));
}

function compileCss() {
  var sass = require('gulp-sass');
  var importOnce = require('node-sass-import-once');

  gulp.src(srcDir + 'css/index.scss')
      .pipe(sass({
        sync: true,
        importer: importOnce,
        importOnce: {
          index: false,
          css: true,
          bower: false
        },
        includePaths: [srcDir + 'css', '../node_modules'],
        onError: console.error
      }))
      .pipe(updateBrowser())
      .pipe(gulp.dest(distDir + 'css'));
}

function compileHtml() {
  var _ = require('lodash');
  var build = require('gulp-build');
  var appConfig = _.assign({
    appConfig: JSON.stringify(application.appConfig[environment])
  }, application.appConfig[environment]);

  gulp.src(srcDir + 'public/**/*.html')
      .pipe(build(appConfig))
      .pipe(updateBrowser())
      .pipe(gulp.dest(distDir));
}

function copyPublic() {
  gulp.src([srcDir + 'public/**/*', '!' + srcDir + 'public/**/*.html'])
      .pipe(updateBrowser())
      .pipe(gulp.dest(distDir));
}

function launchServer() {
  var url = require('url');
  var webpack = require('webpack');
  var webpackDevMiddleware = require('webpack-dev-middleware');
  var webpackHotMiddleware = require('webpack-hot-middleware');
  var webpackConfig = require(configDir + 'webpack')(environment);
  var bundler = webpack(webpackConfig);

  browserSync.init({
    open: false,
    port: application.serverPort,

    server: {
      baseDir: './tmp/',

      middleware: [
        webpackDevMiddleware(bundler, {
          noInfo: true,
          stats: { colors: true },
          publicPath: webpackConfig.output.publicPath,
        }),

        webpackHotMiddleware(bundler),

        function(req, res, next) {
          var fileName = url.parse(req.url);
          fileName = fileName.href.split(fileName.search).join("");
          var fileExists = fs.existsSync('./tmp/' + fileName);

          if (!fileExists && fileName.indexOf("browser-sync-client") < 0) {
            req.url = application.appConfig[environment].baseHref + 'index.html';
          }
          return next();
        },
      ],
    },
  });
}

function launchMockServers() {
  var mockServers = require('./mockServers');

  mockServers.forEach(function(mockServer) {
    var app         = require('express')(),
        cors        = require('cors'),
        bodyParser  = require('body-parser'),
        whitelist   = ['http://localhost:' + application.serverPort],
        options     = {
          origin: function(origin, callback) {
            callback(null, (whitelist.indexOf(origin) !== -1));
          }
        };

    app.use(cors(options));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    mockServer.server(app);

    app.listen(mockServer.port);
  });
}

function updateBrowser() {
  var through2 = require('through2');

  if (environment === 'production') {
    return through2.obj(function bypassBrowserUpdate(file, encoding, callback) {
      callback(null, file);
    });
  }

  return browserSync.reload({ stream: true });
}

var gulp = require('gulp');
var srcDir = './src/';
var distDir = './dist/';
var webpack = require('webpack');
var packageJson = require('./package.json');

// true if you want all of your dependencies to be bundled on a vendor.js file
var bundleDependenciesSeparately = true;

gulp.task('default', ['run']);
gulp.task('run', ['build-commonjs', 'build-standalone']);

gulp.task('build-commonjs', function buildCommonJS() {
  var babel = require('gulp-babel');

  gulp.src([srcDir + '/**/*.js', srcDir + '/**/*.jsx'])
      .pipe(babel({ stage: 1 }))
      .pipe(gulp.dest(distDir + 'commonjs/'));

  // In case your code contains css files
  gulp.src([srcDir + '/**/*.css'])
      .pipe(gulp.dest(distDir + 'commonjs/'));
});

gulp.task('build-standalone', function buildStandalone() {
  gulp.src(srcDir + 'index.js')
      .pipe(webpackTask())
      .pipe(gulp.dest(distDir + 'standalone/bundle'));

  gulp.src(srcDir + 'index.js')
      .pipe(webpackTask())
      .pipe(uglify())
      .pipe(gulp.dest(distDir + 'standalone/minified'));
});

// ********************************* PROTECTED *********************************

function uglify() {
  var through2 = require('through2');
  var uglifycss = require('gulp-uglifycss');
  var gulpUglify = require('gulp-uglify');

  return through2.obj(function(file, encoding, callback) {
    var extention = file.relative.substr(file.relative.lastIndexOf('.'));

    // In case your code contains css files
    if (extention === '.css') {
      return uglifycss()._transform(file, encoding, callback);
    }

    return gulpUglify()._transform(file, encoding, callback);
  });
}

function webpackTask() {
  var config = webpackBasicConfig();

  config.entry[packageJson.name] = srcDir + 'index.js';

  enableVendorIfNeeded(config);

  return require('webpack-stream')(config);
}

function webpackBasicConfig() {
  var timeStamp = +(new Date());

  return {
    entry: {},

    output: {
      filename: '[name].js',
      chunkFilename: '[id]' + timeStamp + '-chunk.js'
    },

    module: {
      loaders: [
        {
          test: /\.jsx$/,
          exclude: /node_modules/,
          loaders: ['babel?stage=1']
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loaders: ['babel?stage=1']
        }
      ]
    },

    resolve: {
      extensions: ['', '.js', '.jsx']
    },

    plugins: []
  };
}

function enableVendorIfNeeded(config) {
  if (!bundleDependenciesSeparately) { return false; }

  config.entry.vendor = Object.keys(packageJson.dependencies || {});

  config.plugins.push(new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js'))
}

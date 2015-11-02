var _ = require('lodash');
var webpack = require('webpack');
var application = require('./application');

function webpackConfig(environment) {
  var productionMode = (environment === 'production');
  var appConfig = application.appConfig[environment];

  var config = {
    entry: { index: './js/index.js' },
    output: {
      path: __dirname + '/../tmp' + appConfig.baseHref,
      publicPath: appConfig.baseHref,
      filename: 'js/[name].js',
      chunkFilename: 'js/[id]' + (+(new Date())) + '-chunk.js',
    },
    module: {
      preLoaders: [],
      loaders: [
        { test: /\.jsx$/, exclude: /node_modules/, loaders: ['react-hot', 'babel?stage=1'] },
        { test: /\.js$/, exclude: /node_modules/, loaders: ['react-hot', 'babel?stage=1'] },
        { test: /\.json$/, include: /\.json$/, loaders: ['json-loader'] }
      ]
    },
    resolve: { extensions: ['', '.js', '.jsx'] },
    plugins: []
  };

  enableEslint(config);
  enableVendor(config, productionMode);
  config.plugins.push(new webpack.optimize.OccurenceOrderPlugin());
  enableCssModules(config);
  enableHotReload(config, productionMode);
  config.plugins.push(new webpack.NoErrorsPlugin());

  return config;
}

module.exports = webpackConfig;

// ********************************* PROTECTED *********************************

function enableEslint(config) {
  if (!application.eslint) { return false; }

  try {
    require.resolve('eslint-loader');
  } catch(error) {
    return false;
  }

  config.module.preLoaders.push({
    test: /\.js$/,
    exclude: /node_modules/,
    loader: 'eslint-loader'
  });

  config.module.preLoaders.push({
    test: /\.jsx$/,
    exclude: /node_modules/,
    loader: 'eslint-loader'
  });
}

function enableVendor(config, productionMode) {
  var reactHot = productionMode ? [] : [
    'webpack/hot/dev-server',
    'webpack-hot-middleware/client'
  ];

  config.entry.vendor = _.union(application.vendorDependencies, [
    'react',
    'react-router',
    'react-css-modules',
    'react-bootstrap',
  ], reactHot);

  config.plugins.push(new webpack.optimize.CommonsChunkPlugin('vendor', 'js/vendor/index.js'))
}

function enableCssModules(config) {
  var ExtractTextPlugin = require('extract-text-webpack-plugin');

  config.module.loaders.push({
    test: /\.css$/,
    loader: ExtractTextPlugin.extract('style', 'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]')
  });

  config.plugins.push(new ExtractTextPlugin('css/react_css_modules/[name].css', { allChunks: true }));
}

function enableHotReload(config, productionMode) {
  if (productionMode) { return false; }

  config.plugins.push(new webpack.HotModuleReplacementPlugin());
  config.plugins.push(new webpack.OldWatchingPlugin());
}

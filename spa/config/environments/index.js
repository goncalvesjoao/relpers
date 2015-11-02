var _ = require('lodash');
var fs = require('fs');

function loadEnvironments(config) {
  var appConfig = {};

  _.each(fs.readdirSync(__dirname), (environmentFile) => {
    var environment = environmentFile.substr(0, environmentFile.lastIndexOf('.'));

    if (environment !== 'index') {
      appConfig[environment] = require('./' + environment)(config);
    }
  });

  return appConfig;
}

module.exports = loadEnvironments;

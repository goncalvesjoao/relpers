var _ = require('lodash');

function productionConfig(config) {

  return _.assign({}, config, {
    environment: 'production',

    baseHref: '/relpers/v1.0/',
  });

}

module.exports = productionConfig;

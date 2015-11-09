var _ = require('lodash');

function productionConfig(config) {

  return _.assign({}, config, {
    environment: 'production',

    baseHref: '/relpers/v1.2/',
  });

}

module.exports = productionConfig;

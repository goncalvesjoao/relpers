var _ = require('lodash');

function productionConfig(config) {

  return _.assign({}, config, {
    environment: 'production',

    baseHref: '/relpers/',
  });

}

module.exports = productionConfig;

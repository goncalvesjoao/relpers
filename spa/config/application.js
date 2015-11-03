var relpersPackageJson = require('../../package.json');

module.exports = {

  appConfig: require('./environments')({
    'name': relpersPackageJson.name,
    'author': relpersPackageJson.author,
    'version': relpersPackageJson.version,
    'repository': relpersPackageJson.repository,
    'description': relpersPackageJson.description,

    baseHref: '/',
  }),

  eslint: true,

  serverPort: 9000,

  vendorDependencies: Object.keys(relpersPackageJson.dependencies || {}),

};

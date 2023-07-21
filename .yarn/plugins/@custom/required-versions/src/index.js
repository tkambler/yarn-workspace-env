require('ts-node').register();
const { factory } = require('./plugin');

module.exports = {
  name: 'plugin-foo',
  factory: require => factory(require),
};

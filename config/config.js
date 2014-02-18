var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'generator-express-test'
    },
    port: 3000,
    db: 'mongodb://localhost/generator-express-test-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'generator-express-test'
    },
    port: 3000,
    db: 'mongodb://localhost/generator-express-test-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'generator-express-test'
    },
    port: 3000,
    db: 'mongodb://localhost/generator-express-test-production'
  }
};

module.exports = config[env];

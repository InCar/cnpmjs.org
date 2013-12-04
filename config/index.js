/*!
 * cnpmjs.org - config/index.js
 *
 * Copyright(c) cnpmjs.org and other contributors.
 * MIT Licensed
 *
 * Authors:
 *  dead_horse <dead_horse@qq.com>
 *  fengmk2 <fengmk2@gmail.com> (http://fengmk2.github.com)
 */

'use strict';

/**
 * Module dependencies.
 */

var path = require('path');
var fs = require('fs');
var mkdirp = require('mkdirp');

fs.existsSync = fs.existsSync || path.existsSync;
var pkg = require('../package.json');

var root = path.dirname(__dirname);

var config = {
  version: pkg.version,
  registryPort: 7001,
  webPort: 7002,
  enableCluster: false,
  debug: true, // if debug
  logdir: path.join(root, '.tmp', 'logs'),
  // mysql config
  mysqlServers: [
    {
      host: '127.0.0.1',
      port: 3306,
      user: '',
      password: ''
    }
  ],
  mysqlDatabase: 'cnpmjs_org',
  mysqlMaxConnections: 4,
  mysqlQueryTimeout: 5000,
};

// load config/config.js, everything in config.js will cover the same key in index.js
var customConfig = path.join(root, 'config/config.js');
if (fs.existsSync(customConfig)) {
  var options = require(customConfig);
  for (var k in options) {
    config[k] = options[k];
  }
}

mkdirp.sync(config.logdir);

module.exports = config;

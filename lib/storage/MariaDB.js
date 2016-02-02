'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _sequelize = require('sequelize');

var _sequelize2 = _interopRequireDefault(_sequelize);

var _process = require('process');

var _process2 = _interopRequireDefault(_process);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class MariaDB {
	constructor(config) {
		this.config = config;
		this.connection = new _sequelize2.default(config.database, config.username, config.password, {
			host: config.host,
			dialect: 'mariadb',

			pool: {
				max: config.pool.max || 5,
				min: config.pool.max || 0,
				idle: config.pool.idle || 1000
			}
		});
	}

	/**
  * Publish DB Connection to global object
  * @param  {String} name
  */
	publishGlobal() {
		let name = arguments.length <= 0 || arguments[0] === undefined ? 'maria' : arguments[0];

		global[name] = this.connection;
	}

	/**
  * Relative path to model dir
  * @param  {String} modelsDir
  */
	importModels(modelsDir) {
		let mariaDir = _path2.default.join(_process2.default.cwd(), './src/server/storage');
		let absoluteDir = _path2.default.join(mariaDir, modelsDir);

		_fs2.default.readdirSync(absoluteDir).forEach(file => {
			this.connection.import(_path2.default.join(absoluteDir, file));
		});
	}
}
exports.default = MariaDB;
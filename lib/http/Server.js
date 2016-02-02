'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Server {
	constructor() {

		/**
   * Create express.js instance
   * @type {Object}
   */
		this.express = (0, _express2.default)();
	}

	/**
  * Register static assests middleware
  * @param  {string} dir
  */
	registerStatic(dir) {
		this.express.use(_express2.default.static(dir));
	}

	/**
  * Mount http middleware
  * @param {Middleware} middleware
  */
	addMiddleware(middleware) {

		if (middleware.path) {
			this.express.use(middleware.path, middleware.next);
		} else {
			this.express.use(middleware.next);
		}
	}

	/**
  * Listen on selected port
  * @param  {integer} port
  * @return {Promise}
  */
	listen(port) {
		return new Promise((resolve, reject) => {
			this.express.listen(port, () => {
				resolve();
			});
		});
	}
}
exports.default = Server;
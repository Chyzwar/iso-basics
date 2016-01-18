import express from 'express';

export default class Server {
	constructor() {

		/**
		 * Create express.js instance
		 * @type {Object}
		 */
		this.express = express();
	}

	/**
	 * Register static assests middleware
	 * @param  {string} dir
	 */
	registerStatic(dir){
		this.express.use(
			express.static(dir)
		);
	}

	/**
	 * Mount http middleware
	 * @param {Middleware} middleware
	 */
	addMiddleware(middleware){

		if(middleware.path){
			this.express.use(
				middleware.path,
				middleware.next
			)
		}else{
			this.express.use(middleware.next)
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
		})

	}
}
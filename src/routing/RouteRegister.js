
export default class RouteRegister {
	constructor(register){
		this.routes = this.buildRoutes(register);
	}

  /**
   * Define class iterator based on routes array
   * It is possible to use (for in) construct
   */
	[Symbol.iterator]() {
        return this.routes.values();
  }

  /**
   * Build Router Muddleware
   * @param  {array} register
   * @return {array}
   */
	buildRoutes(register){
		return register.map((routeParts) => {

			let path = routeParts[0];
			let RouterClass = routeParts[1];
      let RendererClass = routeParts[2];

			return new RouterClass(path, new RendererClass())
		});
	}
}

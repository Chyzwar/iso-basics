import React from 'react';
import { Route } from 'react-router';

class ClientRegister {
  constructor(register) {
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
   * Build all client routes
   * @param  {array} register
   * @return {array}
   */
  buildRoutes(register) {
    return register.map((routeParts) => {
      const path = routeParts[0];
      const Page = routeParts[1];

      return <Route path={path} components={Page}/>;
    });
  }
}

export default ClientRegister;

import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux';
import { Router, Route, browserHistory } from 'react-router'


class ReactClient{
  constructor(register) {
    this.routes = register.routes;
    this.store = register.store;
  }

  init(){
    const initState = window.initState;
    const history = syncHistoryWithStore(browserHistory, this.store);

    ReactDOM.render(
      <Provider store={this.store}>
        <Router history={history}>
          <Route path="/" component={App}>
            <Route path="foo" component={Foo}/>
            <Route path="bar" component={Bar}/>
          </Route>
        </Router>
      </Provider>,
      document.getElementById('mount')
    )
  }
}

export default ReactClient;

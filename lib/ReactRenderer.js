'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _server = require('react-dom/server');

var _reactRedux = require('react-redux');

var _redux = require('redux');

class ReactRenderer {
  constructor() {
    this.type = 'react';
  }

  render(Page, Store, reducer) {
    const promise = new Promise(resolve => {
      new Store().getData().then(initState => {
        const pageStore = (0, _redux.createStore)(reducer, initState);
        const page = (0, _server.renderToString)(_react.React.createElement(
          _reactRedux.Provider,
          { store: pageStore },
          _react.React.createElement(Page, null)
        ));
        resolve(page);
      });
    });

    return promise;
  }
}
exports.default = ReactRenderer;
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _server2 = _interopRequireDefault(_server);

var _reactRedux = require('react-redux');

var _redux = require('redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ReactRenderer {
  constructor() {
    this.type = 'react';
  }

  render(Page, Store, reducer) {
    const promise = new Store().getData();

    promise.then(initState => {
      const pageStore = (0, _redux.createStore)(reducer, initState);
      console.log(initState, 'initState');
      return this.renderPage(pageStore, Page);
    }).catch(err => {
      console.log(err, 'error');
    });

    return promise;
  }

  renderPage(store, Page) {
    const page = _server2.default.renderToString(_react2.default.createElement(
      _reactRedux.Provider,
      { store: store },
      _react2.default.createElement(Page, null)
    ));

    return `<!doctype html> ${ page }`;
  }
}
exports.default = ReactRenderer;
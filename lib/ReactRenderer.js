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

  render(Page, storeFunction, reducer) {
    let promise = storeFunction();

    return promise.then(initState => {
      const pageStore = (0, _redux.createStore)(reducer, initState);
      const page = _server2.default.renderToString(_react2.default.createElement(
        _reactRedux.Provider,
        { store: pageStore },
        _react2.default.createElement(Page, null)
      ));

      return `<!doctype html> ${ page }`;
    }).catch(err => {
      console.log(err, 'in render');
    });

    // return promise;
  }
}
exports.default = ReactRenderer;
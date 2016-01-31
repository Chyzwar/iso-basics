'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _Middleware = require('./Middleware');

var _Middleware2 = _interopRequireDefault(_Middleware);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ExpressRouter extends _Middleware2.default {
  constructor(path, renderer) {
    super(path, (0, _express.Router)());
    this.renderer = renderer;
  }

  render() {
    return this.renderer.render(...arguments);
  }
}
exports.default = ExpressRouter;
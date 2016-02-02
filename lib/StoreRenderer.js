'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

class StoreRenderer {
  constructor() {
    this.type = 'store';
  }

  render(store) {
    return new store();
  }
}

exports.default = StoreRenderer;
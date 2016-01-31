'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

class StoreRenderer {
  constructor() {
    this.type = 'store';
  }

  render(Store) {
    return new Store().getData();
  }
}

exports.default = StoreRenderer;
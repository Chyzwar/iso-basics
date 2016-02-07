import buildStore from './buildStore.js';

class StoreRenderer {
  constructor() {
    this.type = 'store';
  }

  render(storeFunction) {
    return buildStore(storeFunction());
  }
}

export default StoreRenderer;

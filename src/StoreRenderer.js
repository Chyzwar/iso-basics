
class StoreRenderer {
  constructor() {
    this.type = 'store';
  }

  render(store) {
    return new store();
  }
}

export default StoreRenderer;

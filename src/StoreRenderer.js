
class StoreRenderer {
  constructor() {
    this.type = 'store';
  }

  render(Store) {
    return new Store().getData();
  }
}

export default StoreRenderer;

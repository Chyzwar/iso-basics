
class StoreRenderer {
  constructor() {
    this.type = 'store';
  }

  render(Store) {
    const promise = new Promise(
      (resolve) => {
        new Store().getData().then(
          (initState) => {
            resolve(initState);
          });
      }
    );

    return promise;
  }
}

export default StoreRenderer;

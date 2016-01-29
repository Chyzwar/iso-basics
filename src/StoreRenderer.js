

class StoreRenderer {
  constructor(){
    this.type = 'store';
  }

  render(Store){
    new Store.getData().then((initState) => {
      console.log(initState, state);
      return initState;
    });
  }
}

export default StoreRenderer

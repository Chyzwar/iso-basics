
export default class AltRenderer {
  constructor() {
    this.type = 'alt';
  }

  render(Page, storeFunction, reducer) {
    const promise = buildStore(
        storeFunction()
      );

    return promise
      .then((initState) => {
        const pageStore = createStore(reducer, initState);
        const page = ReactDOMServer.renderToString(
            <Page flux={flux}/>
        );
        return `<!doctype html> ${page}`;
      });
  }
}

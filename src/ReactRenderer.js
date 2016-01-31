import React from 'react';
import ReactDOMServer from 'react-dom/server';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

export default class ReactRenderer {
  constructor() {
    this.type = 'react';
  }

  render(Page, Store, reducer) {
    const promise = new Store().getData();

    promise.then((initState) => {
      const pageStore = createStore(reducer, initState);
      console.log(initState, 'initState');
      return this.renderPage(pageStore, Page);
    }).catch((err) => {
      console.log(err, 'error');
    });

    return promise;
  }

  renderPage(store, Page) {
    const page = ReactDOMServer.renderToString(
     <Provider store={store}>
      <Page/>
    </Provider>);

    return `<!doctype html> ${page}`;
  }
}

import React from 'react';
import ReactDOMServer from 'react-dom/server';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

export default class ReactRenderer {
  constructor() {
    this.type = 'react';
  }

  render(Page, storeFunction, reducer) {
    let promise = storeFunction();

    promise.then((initState) => {
      const pageStore = createStore(reducer, initState);
      const page = ReactDOMServer.renderToString(
        <Provider store={pageStore}>
          <Page/>
        </Provider>
      );

      return `<!doctype html> ${page}`;
    });

    return promise;
  }
}

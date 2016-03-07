import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import resolve from './utils/resolve';

export default class ReduxRenderer {
  constructor() {
    this.type = 'react';
  }

  render(Page, storeFunction, reducer) {
    const promise = resolve(
        storeFunction()
      );

    return promise
      .then((initState) => {
        const pageStore = createStore(reducer, initState);
        const page = ReactDOMServer.renderToString(
          <Provider store={pageStore}>
            <Page/>
          </Provider>
        );

        return `<!doctype html> ${page}`;
      });
  }
}

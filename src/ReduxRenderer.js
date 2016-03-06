import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import buildStore from './buildStore';

export default class ReduxRenderer {
  constructor() {
    this.type = 'react';
  }

  render(Page, storeFunction, reducer) {
    const promise = buildStore(
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

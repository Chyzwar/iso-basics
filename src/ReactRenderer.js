import React from 'react';
import { renderToString } from 'react-dom/server';

import { Provider } from 'react-redux';
import { createStore } from 'redux'

export default class ReactRenderer {
  constructor() {
    this.type = 'react';
  }

  render(Page, Store, reducer) {

    return new Promise((resolve, reject) => {
      new Store().getData().then((initState) => {
        console.log(initState, 'initState');
        const pageStore = createStore(reducer, initState);

        let page = renderToString(
          <Provider store={pageStore}>
            <Page />
          </Provider>
        );
        console.log(page, 'page');
        resolve(page);
      });
    });

  }
}

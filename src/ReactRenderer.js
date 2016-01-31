import { React } from 'react';
import { renderToString } from 'react-dom/server';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

export default class ReactRenderer {
  constructor() {
    this.type = 'react';
  }

  render(Page, Store, reducer) {
    const promise = new Promise(

      (resolve) => {
        new Store().getData().then(

          (initState) => {
            const pageStore = createStore(reducer, initState);
            const page = renderToString(
              <Provider store={pageStore}>
                <Page />
              </Provider>
            );
            resolve(page);
          });
      });

    return promise;
  }
}

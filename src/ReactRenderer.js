import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';

export default class ReactRenderer {
  constructor() {
    this.type = 'react';
  }

  render(Page, Store) {
    return renderToString(
      <Provider store={Store}>
        <Page />
      </Provider>
    );
  }
}

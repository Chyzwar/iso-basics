import AltContainer from 'alt-container';
import resolve from './utils/resolve';

class AltRenderer {
  constructor() {
    this.type = 'alt';
  }

  render(Page, bootsrap) {
    const promise = resolve(bootstrap)

    return promise
      .then((stores) => {
        const page = ReactDOMServer.renderToString(
          <AltContainer stores={stores}>
            <Page />
          </AltContainer>
        );
        return `<!doctype html> ${page}`;
      });
  }
}

export default AltRenderer;

import React from 'react';


export default class ReactRenderer{
  constructor(){
    this.type = 'react';
  }

  render(Page, ...options){
    return React.renderToString(<Page />);
  }
}

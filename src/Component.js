import React from 'react';


export default class Component{
  constructor(){
    this.type = 'react';
  }

  render(Page, ...options){
    return React.renderToString(<Page />);
  }
}

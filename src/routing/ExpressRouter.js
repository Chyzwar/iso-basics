import { Router } from 'express';
import Middleware from '../http/Middleware';

export default class ExpressRouter extends Middleware{
	constructor(path, renderer){
		super(path, Router());
    this.renderer = renderer;
	}

  render(...options){
    return this.renderer.render(...options);
  }
}

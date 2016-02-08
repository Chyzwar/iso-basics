import { Router } from 'express';
import Middleware from './Middleware';

const router = new Router();

class ExpressRouter extends Middleware {
  constructor(path, renderer) {
    super(path, router);
    this.renderer = renderer;
  }

  render(...options) {
    return this.renderer.render(...options);
  }
}

export default ExpressRouter;

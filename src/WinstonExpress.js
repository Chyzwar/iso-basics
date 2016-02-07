import { Logger } from 'winston';
import Middleware from './Middleware';

class WinstonExpress extends Middleware {
  constructor(options) {
    super();
    this.logger = new Logger(options);
  }

  next(req, res, next) {
    next();
  }
 }

export default WinstonExpress;

import { Logger } from 'winston';
import Middleware from './Middleware';

const winstonMiddleware = (req, res, next) => {

  next();
};

class WinstonExpress extends Middleware {
  constructor(options) {
    super(undefined, winstonMiddleware);
    this.logger = new Logger(options);
  }

  publishAsGlobal(name = 'logger'){
    global[name] = this.logger;
  }
 }

export default WinstonExpress;

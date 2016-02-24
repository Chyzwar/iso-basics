import { Logger } from 'winston';
import Middleware from './Middleware';

const winstonMiddleware = (req, res, next) => {

  next();
};

class WinstonExpress extends Middleware {
  constructor(options) {
    super(undefined, winstonMiddleware);
    this.logger = new Logger(options);

    /**
     * Monkey path logger, add handler for log callback
     * @param  {Number} code
     */
    this.logger.exitAfterFlush = function (code = 0) {
      this.transports.file.on('flush', function() {
        process.exit(code);
    });
    }
  }
 }

export default WinstonExpress;

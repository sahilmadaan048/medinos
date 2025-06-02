import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class AppService {
  logger: Logger;

  constructor() {
    // this.logger = new Logger('CUSTOM LOGGER');
    // this.logger = new Logger(AppService.name);
    this.logger = new Logger();
  }

  getHello(): string {
    this.logger.log('test');  // .log .warn .debug
    return 'Hello World!';
  }
}

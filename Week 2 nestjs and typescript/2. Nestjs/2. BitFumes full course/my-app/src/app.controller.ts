import { Controller, Get, Param, Req, Post, Delete, Patch} from '@nestjs/common';
import { AppService } from './app.service';

@Controller('/user')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello() {
    return this.appService.getHello();
  }
}

import { Controller, Get, Param, Req, Post, Delete, Patch} from '@nestjs/common';
import { AppService } from './app.service';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { ServerDescription } from 'typeorm';

@Controller('/user')
export class AppController {
  constructor(private readonly appService: AppService) {}

//   @ApiOperation({summary: 'used to call getHello funciton'})
//   @ApiResponse({status: 201, description: 'product created'})
//   @Get()
//   getHello() {
//     return this.appService.getHello();
//   }
}

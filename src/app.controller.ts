import { Controller, Get } from '@nestjs/common';

@Controller('api')
export class AppController {
  constructor() {}

  @Get('index')
  getHello(): string {
    return 'index';
  }
}

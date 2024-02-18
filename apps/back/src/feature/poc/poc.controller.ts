import { Controller, Get } from '@nestjs/common';

@Controller('poc')
export class PocController {
  constructor() {}

  @Get()
  async getHello(): Promise<string> {
    return 'Hello World! From POC';
  }
}

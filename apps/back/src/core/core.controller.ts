import { Controller, Get } from '@nestjs/common';

@Controller()
export class CoreController {
  constructor() {}

  @Get()
  async getHello(): Promise<string> {
    return 'Hello World! From Core';
  }
}

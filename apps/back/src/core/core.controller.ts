import { Controller, Get } from '@nestjs/common';

@Controller()
export class CoreController {
  constructor() {}

  @Get()
  async getHello(): Promise<string> {
    return (
      'Hello World! From Core, Environment: ' + process.env.DROPLET_ENV + '!'
    );
  }
}

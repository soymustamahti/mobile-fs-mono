import { Module } from '@nestjs/common';
import { PocController } from './poc.controller';

@Module({
  controllers: [PocController],
})
export class PocModule {}

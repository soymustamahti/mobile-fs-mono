import { Module } from '@nestjs/common';
import { PocModule } from '../feature/poc/poc.module';
import { CoreController } from './core.controller';

@Module({
  imports: [PocModule],
  controllers: [CoreController],
})
export class CoreModule {}

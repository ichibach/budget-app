import { Module } from '@nestjs/common';
import { StaticContentService } from './static-content.service';
import { StaticContentController } from './static-content.controller';

@Module({
  controllers: [StaticContentController],
  providers: [StaticContentService],
})
export class StaticContentModule {}

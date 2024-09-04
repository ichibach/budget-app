import { Module } from '@nestjs/common';
import { ScheduledOperationService } from './scheduled-operation.service';
import { ScheduledOperationController } from './scheduled-operation.controller';

@Module({
  controllers: [ScheduledOperationController],
  providers: [ScheduledOperationService],
})
export class ScheduledOperationModule {}

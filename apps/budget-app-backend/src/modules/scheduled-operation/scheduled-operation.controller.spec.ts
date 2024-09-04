import { Test, TestingModule } from '@nestjs/testing';
import { ScheduledOperationController } from './scheduled-operation.controller';
import { ScheduledOperationService } from './scheduled-operation.service';

describe('ScheduledOperationController', () => {
  let controller: ScheduledOperationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ScheduledOperationController],
      providers: [ScheduledOperationService],
    }).compile();

    controller = module.get<ScheduledOperationController>(ScheduledOperationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

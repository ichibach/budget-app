import { Test, TestingModule } from '@nestjs/testing';
import { ScheduledOperationService } from './scheduled-operation.service';

describe('ScheduledOperationService', () => {
  let service: ScheduledOperationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ScheduledOperationService],
    }).compile();

    service = module.get<ScheduledOperationService>(ScheduledOperationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

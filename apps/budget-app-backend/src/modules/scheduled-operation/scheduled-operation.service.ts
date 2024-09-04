import { Injectable } from '@nestjs/common';
import { CreateScheduledOperationDto } from './dto/create-scheduled-operation.dto';
import { UpdateScheduledOperationDto } from './dto/update-scheduled-operation.dto';

@Injectable()
export class ScheduledOperationService {
  create(createScheduledOperationDto: CreateScheduledOperationDto) {
    return 'This action adds a new scheduledOperation';
  }

  findAll() {
    return `This action returns all scheduledOperation`;
  }

  findOne(id: number) {
    return `This action returns a #${id} scheduledOperation`;
  }

  update(id: number, updateScheduledOperationDto: UpdateScheduledOperationDto) {
    return `This action updates a #${id} scheduledOperation`;
  }

  remove(id: number) {
    return `This action removes a #${id} scheduledOperation`;
  }
}

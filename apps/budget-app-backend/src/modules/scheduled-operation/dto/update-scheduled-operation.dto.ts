import { PartialType } from '@nestjs/mapped-types';
import { CreateScheduledOperationDto } from './create-scheduled-operation.dto';

export class UpdateScheduledOperationDto extends PartialType(CreateScheduledOperationDto) {}

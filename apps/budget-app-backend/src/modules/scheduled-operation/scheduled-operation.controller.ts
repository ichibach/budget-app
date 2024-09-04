import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ScheduledOperationService } from './scheduled-operation.service';
import { CreateScheduledOperationDto } from './dto/create-scheduled-operation.dto';
import { UpdateScheduledOperationDto } from './dto/update-scheduled-operation.dto';

@Controller('scheduled-operation')
export class ScheduledOperationController {
  constructor(private readonly scheduledOperationService: ScheduledOperationService) {}

  @Post()
  create(@Body() createScheduledOperationDto: CreateScheduledOperationDto) {
    return this.scheduledOperationService.create(createScheduledOperationDto);
  }

  @Get()
  findAll() {
    return this.scheduledOperationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.scheduledOperationService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateScheduledOperationDto: UpdateScheduledOperationDto) {
    return this.scheduledOperationService.update(+id, updateScheduledOperationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.scheduledOperationService.remove(+id);
  }
}

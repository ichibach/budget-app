import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StaticContentService } from './static-content.service';
import { CreateStaticContentDto } from './dto/create-static-content.dto';
import { UpdateStaticContentDto } from './dto/update-static-content.dto';

@Controller('static-content')
export class StaticContentController {
  constructor(private readonly staticContentService: StaticContentService) {}

  @Post()
  create(@Body() createStaticContentDto: CreateStaticContentDto) {
    return this.staticContentService.create(createStaticContentDto);
  }

  @Get()
  findAll() {
    return this.staticContentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.staticContentService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStaticContentDto: UpdateStaticContentDto) {
    return this.staticContentService.update(+id, updateStaticContentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.staticContentService.remove(+id);
  }
}

import { Injectable } from '@nestjs/common';
import { CreateStaticContentDto } from './dto/create-static-content.dto';
import { UpdateStaticContentDto } from './dto/update-static-content.dto';

@Injectable()
export class StaticContentService {
  create(createStaticContentDto: CreateStaticContentDto) {
    return 'This action adds a new staticContent';
  }

  findAll() {
    return `This action returns all staticContent`;
  }

  findOne(id: number) {
    return `This action returns a #${id} staticContent`;
  }

  update(id: number, updateStaticContentDto: UpdateStaticContentDto) {
    return `This action updates a #${id} staticContent`;
  }

  remove(id: number) {
    return `This action removes a #${id} staticContent`;
  }
}

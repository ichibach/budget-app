import { Injectable, type Type } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import type { ObjectLiteral, Repository } from 'typeorm';
import { BaseRepository } from './base.repository';
import { ConnectionName } from '../const/connection-names.const';

export function BaseRepositoryFactory<
  T extends ObjectLiteral,
>(classRef: Type<T>) {
  @Injectable()
  class AbstractRepository extends BaseRepository<T> {
    constructor(
      @InjectRepository(classRef, ConnectionName.rw)
      public readonly writeRepository: Repository<T>,

      @InjectRepository(classRef, ConnectionName.ro)
      public readonly readRepository: Repository<T>,
    ) {
      super([writeRepository, readRepository]);
    }
  }

  return AbstractRepository;
}

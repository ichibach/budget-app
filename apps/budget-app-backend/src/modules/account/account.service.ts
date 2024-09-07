import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { AccountRepository } from './account.repository';
import { Account } from './entities/account.entity';
import { ConnectionName } from '../../shared/database/const/connection-names.const';
import { Transactional } from 'typeorm-transactional';
import { CollectionPagination } from 'src/shared/database/attributes/collection.attributes';
import { AccountFilterDto } from './dto/account-filter.dto';
import { makePaginationMeta } from 'src/shared/database/utils/makePaginationMeta';
import { AppException } from 'src/shared/exception/app.exception';

@Injectable()
export class AccountService {
  constructor(private readonly accountRepository: AccountRepository) {}

  @Transactional({ connectionName: ConnectionName.rw })
  async create(createAccountDto: CreateAccountDto) {
    const account = new Account(createAccountDto);

    await this.accountRepository.save(account);

    return this.findOne(account.id, ConnectionName.rw);
  }

  findOne(id: number, connection = ConnectionName.ro) {
    return this.accountRepository.findOneById(id, connection);
  }

  async findAll(
    userId: number,
    pagination: CollectionPagination,
    filter: AccountFilterDto,
    connection = ConnectionName.ro,
  ) {
    const [items, count] = await this.accountRepository.paginate(
      pagination,
      connection,
      {
        userId,
        ...this.accountRepository.createSearchFilter('name', filter.text),
      },
      {
        order: {
          updatedAt: 'DESC',
        },
      },
    );

    return makePaginationMeta([items, count], pagination);
  }

  @Transactional({ connectionName: ConnectionName.rw })
  async update(updateAccountDto: UpdateAccountDto) {
    const result = await this.accountRepository.updateById(
      updateAccountDto.id,
      updateAccountDto,
    );

    if (result.affected !== 1) {
      throw new AppException(
        NotFoundException, 
        'errors.account.notFound', 
        { id: updateAccountDto.id }
      );
    }

    return this.findOne(updateAccountDto.id, ConnectionName.rw);
  }

  async remove(id: number) {
    const result = await this.accountRepository.deleteHardById(id);

    if (result.affected !== 1) {
      throw new AppException(
        NotFoundException, 
        'errors.account.notFound', 
        { id }
      );
    }

    return { deleted: Boolean(result.affected) };
  }
}

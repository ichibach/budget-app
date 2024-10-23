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
import { Repository } from 'typeorm';


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
          updatedAt: 'ASC',
        },
      },
    );

    return makePaginationMeta([items, count], pagination);
  }

  async getTotalBalance(userId: number, connection = ConnectionName.ro) {
    console.log('111111111111111111111111111111111\n',{userId})

    const repository = this.accountRepository.repositories.get(connection);



    const result = await repository.sum('current_balance', { userId: 2, is_into_general_balance: true});
  
    return (result || 0).toFixed(2);
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

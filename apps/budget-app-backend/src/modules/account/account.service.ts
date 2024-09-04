import { Injectable } from '@nestjs/common';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { AccountRepository } from './account.repository';
import { Account } from './entities/account.entity';
import { ConnectionName } from '../../shared/database/const/connection-names.const';
import { Transactional } from 'typeorm-transactional';

@Injectable()
export class AccountService {

  constructor(
    private readonly accountRepository: AccountRepository
  ) {}


  @Transactional({ connectionName: ConnectionName.rw })
  async create(createAccountDto: CreateAccountDto) {
    const account = new Account(createAccountDto);

    await this.accountRepository.save(account);

    return this.findOne(account.id, ConnectionName.rw);
  }

  findOne(id: number, connection = ConnectionName.ro) {

    const reps = this.accountRepository.repositories;
    // console.log(reps)

    return this.accountRepository.findOneById(id, connection)
  }

  findAll() {
    return `This action returns all account`;
  }


  update(id: number, updateAccountDto: UpdateAccountDto) {
    return `This action updates a #${id} account`;
  }

  remove(id: number) {
    return `This action removes a #${id} account`;
  }
}

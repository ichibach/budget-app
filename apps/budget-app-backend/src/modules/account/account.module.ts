import { Module } from '@nestjs/common';
import { AccountService } from './account.service';
import { AccountController } from './account.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConnectionName } from '../../shared/database/const/connection-names.const';
import { Account } from './entities/account.entity';
import { AccountRepository } from './account.repository';

@Module({
  imports: [
    ...Object.values(ConnectionName).map((v) =>
      TypeOrmModule.forFeature([Account], v),
    ),
  ],
  providers: [AccountService, AccountRepository],
  controllers: [AccountController],
})
export class AccountModule {}

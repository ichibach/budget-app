import { Module } from '@nestjs/common';

import { ConfigModule } from '@nestjs/config';

import { DatabaseReadConnectionModule } from './shared/database/modules/database-read-connection.module';
import { DatabaseWriteConnectionModule } from './shared/database/modules/database-write-connection.module';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';
import { AccountModule } from './modules/account/account.module';
import { CategoryModule } from './modules/category/category.module';
import { OperationModule } from './modules/operation/operation.module';
import { ScheduledOperationModule } from './modules/scheduled-operation/scheduled-operation.module';
import { StaticContentModule } from './modules/static-content/static-content.module';

import { entities } from './database/database.entities';
import path from 'node:path';



@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    DatabaseReadConnectionModule.forRoot({ entities }),
    DatabaseWriteConnectionModule.forRoot({ entities }),
    
    UserModule,
    AuthModule,
    AccountModule,
    CategoryModule,
    OperationModule,
    ScheduledOperationModule,
    StaticContentModule,
  ],
})
export class AppModule {}

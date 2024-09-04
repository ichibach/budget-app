import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {
  TypeOrmModule,
  type TypeOrmModuleAsyncOptions,
  type TypeOrmModuleOptions,
} from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { addTransactionalDataSource } from 'typeorm-transactional';

import { ConfigModule } from '../../config/config.module';
import { ConnectionName } from '../const/connection-names.const';
import { EnvironmentMode } from '../../config/CoreEnvVariablesSchema';

@Module({})
export class DatabaseWriteConnectionModule {
  public static forRoot(options?: TypeOrmModuleOptions) {
    return TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      name: ConnectionName.rw,
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.getOrThrow('DB_HOST_WRITE'),
        logging:
          configService.getOrThrow('NODE_ENV') === EnvironmentMode.Develop
            ? 'all'
            : false,
        useUTC: true,
        synchronize: false,
        database: configService.getOrThrow('DB_DATABASE_WRITE'),
        username: configService.getOrThrow('DB_USERNAME_WRITE'),
        password: configService.getOrThrow('DB_PASSWORD_WRITE'),
        port: configService.getOrThrow('DB_PORT_WRITE'),
        ...((options as TypeOrmModuleAsyncOptions) || {}),
      }),
      async dataSourceFactory(options) {
        if (!options) {
          throw new Error('Invalid options passed');
        }

        return addTransactionalDataSource({
          name: ConnectionName.rw,
          dataSource: new DataSource(options),
        });
      },
    });
  }
}

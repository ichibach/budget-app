import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {
  TypeOrmModule,
  type TypeOrmModuleAsyncOptions,
  type TypeOrmModuleOptions,
} from '@nestjs/typeorm';
import { DataSource } from 'typeorm';


import { ConfigModule } from '../../config/config.module';
import { ConnectionName } from '../const/connection-names.const';
import { EnvironmentMode } from '../../config/CoreEnvVariablesSchema';
import { addTransactionalDataSource } from 'typeorm-transactional';

@Module({})
export class DatabaseReadConnectionModule {
  public static forRoot(options?: TypeOrmModuleOptions) {
    return {
      module: DatabaseReadConnectionModule,
      imports: [
        TypeOrmModule.forRootAsync({
          imports: [ConfigModule],
          name: ConnectionName.ro,
          useFactory: (configService: ConfigService) => ({
            type: 'postgres',
            host: configService.getOrThrow('DB_HOST_READ'),
            logging:
              configService.getOrThrow('NODE_ENV') === EnvironmentMode.Develop
                ? 'all'
                : false,
            useUTC: true,
            synchronize: false,
            database: configService.getOrThrow('DB_DATABASE_READ'),
            username: configService.getOrThrow('DB_USERNAME_READ'),
            password: configService.getOrThrow('DB_PASSWORD_READ'),
            port: configService.getOrThrow('DB_PORT_READ'),
            ...((options as TypeOrmModuleAsyncOptions) || {}),
          }),
          async dataSourceFactory(options) {
            if (!options) {
              throw new Error('Invalid options passed');
            }
    
            return addTransactionalDataSource({
              name: ConnectionName.ro,
              dataSource: new DataSource(options),
            });
          },
          inject: [ConfigService],
        }),
      ],
    };
  }
}

import { Global, Module } from '@nestjs/common';
import {
  type ConfigFactory,
  ConfigModule as NestJSConfigModule,
} from '@nestjs/config';
import type { ConfigModuleOptions } from '@nestjs/config/dist/interfaces';
import { validateEnvSchema } from './validate';
import { CoreEnvVariablesSchema } from './CoreEnvVariablesSchema';
import { envFilePaths } from './envFilePaths';

@Global()
@Module({})
export class ConfigModule {
  public static forRoot(options?: ConfigModuleOptions) {
    return {
      module: ConfigModule,
      imports: [
        NestJSConfigModule.forRoot({
          envFilePath: envFilePaths,
          isGlobal: true,
          validate: validateEnvSchema(CoreEnvVariablesSchema),
          ...options,
        }),
      ],
    };
  }

  public static forFeature(factory: ConfigFactory) {
    return NestJSConfigModule.forFeature(factory);
  }
}

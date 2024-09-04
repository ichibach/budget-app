import { IsEnum, IsInt, IsString } from 'class-validator';

export enum EnvironmentMode {
  Develop = 'develop',
  Production = 'production',
  Test = 'test',
  Provision = 'provision',
}

export class CoreEnvVariablesSchema {
  @IsEnum(EnvironmentMode)
  NODE_ENV: EnvironmentMode;

  @IsInt()
  APP_PORT: number;

  @IsString()
  APP_NAME: string;
}

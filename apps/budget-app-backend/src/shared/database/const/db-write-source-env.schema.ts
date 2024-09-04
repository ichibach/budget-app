import { IsInt, IsString } from 'class-validator';

export class DBWriteSourceEnvSchema {
  @IsString()
  DB_HOST_WRITE: string;

  @IsString()
  DB_DATABASE_WRITE: string;

  @IsString()
  DB_USERNAME_WRITE: string;

  @IsString()
  DB_PASSWORD_WRITE: string;

  @IsInt()
  DB_PORT_WRITE: number;
}

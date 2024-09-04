import { IsInt, IsString } from 'class-validator';

export class DBReadSourceEnvSchema {
  @IsString()
  DB_HOST_READ: string;

  @IsString()
  DB_DATABASE_READ: string;

  @IsString()
  DB_USERNAME_READ: string;

  @IsString()
  DB_PASSWORD_READ: string;

  @IsInt()
  DB_PORT_READ: number;
}

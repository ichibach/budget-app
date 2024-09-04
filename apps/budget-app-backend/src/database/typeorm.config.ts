import { DataSource } from 'typeorm';
import { config } from 'dotenv';
import { resolve } from 'node:path';
import { entities } from './database.entities';

config({ path: resolve(`./.env`) });
config({ path: resolve(`./.env.${process.env.NODE_ENV}`) });



export default new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST_WRITE,
  port: +process.env.DB_PORT_WRITE,
  username: process.env.DB_USERNAME_WRITE,
  password: process.env.DB_PASSWORD_WRITE,
  database: process.env.DB_DATABASE_WRITE,
  entities: [...entities],
  synchronize: false,
  logging: process.env.DB_LOGGING === 'true',
  migrations: [`${__dirname}/migrations/*{.ts,.js}`],
  migrationsTableName: 'migrations',
});

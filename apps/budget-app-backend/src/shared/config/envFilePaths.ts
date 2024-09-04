import { resolve } from 'node:path';

export const envFilePaths = [
  resolve(`.env.${process.env.NODE_ENV}`),
  resolve('.env'),
];

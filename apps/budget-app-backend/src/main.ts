import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { initializeTransactionalContext } from 'typeorm-transactional';

import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { I18nExceptionFilter } from './shared/filter/i18n-exception.filter';
import { ErrorLoggerInterceptor } from './shared/database/interceptor/error-logger.interceptor';

async function bootstrap() {
  initializeTransactionalContext();

  const app = await NestFactory.create(AppModule, {
    // logger: ['error', 'warn']
  });
  const globalPrefix = 'api';

  app.setGlobalPrefix(globalPrefix);

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    }),
  );

  app.useGlobalFilters(
    new I18nExceptionFilter(),
  );

  app.useGlobalInterceptors(
    new ErrorLoggerInterceptor()
  )

  app.enableCors();

  const config = app.get(ConfigService);

  const PORT = config.get('APP_PORT');
  const APP_NAME = config.get('APP_NAME');

  await app.listen(PORT, '0.0.0.0');

  Logger.log(
    `🚀 Application is running on: ${await app.getUrl()}/${globalPrefix}`,
    APP_NAME,
  );
}

bootstrap();

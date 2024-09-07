

import { ExceptionFilter, Catch, ArgumentsHost, HttpException } from '@nestjs/common';
import { Request, Response } from 'express';
import { AppException } from '../exception/app.exception';

@Catch(AppException)
export class I18nExceptionFilter implements ExceptionFilter {
  catch(appException: AppException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    const { exceptionFactory, exceptionI18nKey, exceptionArgs } = appException;

    // i18n logic
    // ...
    const exceptionMessage = 'exceptionI18nKey' + exceptionArgs['id'];
    //


    const httpException = new exceptionFactory(exceptionMessage);

    const status = httpException.getStatus();

    response
      .status(status)
      .json(httpException);
  }
}
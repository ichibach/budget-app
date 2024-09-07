import { CallHandler, ExecutionContext, Injectable, Logger, NestInterceptor, NotFoundException } from "@nestjs/common";
import { Request } from "express";
import { catchError, Observable, throwError } from "rxjs";
import { AppException } from "src/shared/exception/app.exception";



@Injectable()
export class ErrorLoggerInterceptor implements NestInterceptor {
  private readonly logger = new Logger(ErrorLoggerInterceptor.name);

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      catchError((error) => {
        // Получение данных о запросе
        const request = context.switchToHttp().getRequest<Request>();
        const { method, url } = request;

        if(error instanceof AppException) return throwError(() => error);


        // Логгирование ошибки
        this.logger.error(
          `Error occurred during ${method} ${url}: ${error.message}`,
          error.stack,
        );

        // Бросить ошибку дальше, чтобы она была обработана глобальными фильтрами
        return throwError(() => error);
      }),
    );
  }
}
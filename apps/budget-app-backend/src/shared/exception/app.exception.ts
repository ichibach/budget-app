import { HttpException, NotFoundException } from "@nestjs/common";


type AConstructorTypeOf<T> = new (...args:any[]) => T;

export class AppException<T = AConstructorTypeOf<NotFoundException>> {

  constructor(
    public readonly exceptionFactory: T,
    public readonly exceptionI18nKey: string,
    public readonly exceptionArgs?:  object
  ) {}

}



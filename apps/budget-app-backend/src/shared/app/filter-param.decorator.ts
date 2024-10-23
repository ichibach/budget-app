import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const FilterParam = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    const name: string = request.query['name'] || '';

    return { name };
  },
);

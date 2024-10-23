import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const PaginationParam = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    const skip = parseInt(request.query.skip, 10) || 0;
    const take = parseInt(request.query.take, 10) || 10;

    return { skip, take };
  },
);
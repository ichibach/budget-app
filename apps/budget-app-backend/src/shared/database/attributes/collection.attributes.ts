import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsDefined, IsInt, IsOptional } from 'class-validator';

export const DEFAULT_PAGINATION = {
  skip: 0,
  take: 10,
};

export class CollectionMeta {
  @ApiProperty({ default: DEFAULT_PAGINATION.skip })
  public skip = DEFAULT_PAGINATION.skip;

  @ApiProperty({ default: DEFAULT_PAGINATION.take })
  public take = DEFAULT_PAGINATION.take;

  @ApiProperty()
  public count: number;
}

export class CollectionPagination {
  @ApiPropertyOptional({ type: () => Number, default: DEFAULT_PAGINATION.skip })
  @IsInt()
  @Transform(({ value }) => parseInt(value, 10))
  @IsOptional()
  public readonly skip = DEFAULT_PAGINATION.skip;

  @ApiPropertyOptional({ type: () => Number, default: DEFAULT_PAGINATION.take })
  @IsInt()
  @Transform(({ value }) => parseInt(value, 10))
  @IsOptional()
  public readonly take = DEFAULT_PAGINATION.take;
}

export class NotOptionalCollectionPagination {
  @ApiProperty({ type: () => Number, default: DEFAULT_PAGINATION.skip })
  @IsInt()
  @Transform(({ value }) => parseInt(value, 10))
  @IsDefined()
  public readonly skip = DEFAULT_PAGINATION.skip;

  @ApiProperty({ type: () => Number, default: DEFAULT_PAGINATION.take })
  @IsInt()
  @IsDefined()
  @Transform(({ value }) => parseInt(value, 10))
  public readonly take = DEFAULT_PAGINATION.take;
}

export abstract class PaginationMeta<T> {
  @ApiProperty()
  public readonly data: T[];

  @ApiProperty()
  public readonly meta: CollectionMeta;
}

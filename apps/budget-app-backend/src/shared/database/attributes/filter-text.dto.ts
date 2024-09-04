import { ApiPropertyOptional } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsOptional } from 'class-validator';
import { TrimTransformer } from '../utils/trim.transformer';

export class FilterTextDto {
  @ApiPropertyOptional({ name: 'filter[text]' })
  @Transform(TrimTransformer)
  @IsOptional()
  public text?: string;
}

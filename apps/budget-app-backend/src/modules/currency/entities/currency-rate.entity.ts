import { DefaultDatabaseEntity } from 'src/shared/database/default.entity';
import {Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn} from 'typeorm'
import { Currency } from './currency.entity';


@Entity('currency-rate')
export class CurrencyRate {

  constructor(data?: Partial<CurrencyRate>) {
    if (data) Object.assign(this, data);
  }

  @PrimaryGeneratedColumn()
  public id: number;

  @CreateDateColumn()
  public createdAt: Date;

  @ManyToOne(() => Currency, (currency) => currency.code)
  currency: string;

  @ManyToOne(() => Currency, (currency) => currency.code)
  base: string;

  @Column('decimal', { precision: 12, scale: 4 })
  rate: number;

}

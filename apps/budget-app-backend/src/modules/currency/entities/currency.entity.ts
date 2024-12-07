import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { CurrencyRate } from "./currency-rate.entity";


@Entity('currency')
export class Currency {

  constructor(data?: Partial<Currency>) {
    if (data) Object.assign(this, data);
  }

  @PrimaryColumn()
  code: string; // Код валюты, например, USD, EUR и т.д.

  @Column()
  description: string; // Описание валюты, например, "Доллар США"

  @OneToMany(() => CurrencyRate, (currencyRate) => currencyRate.currency)
  rates: CurrencyRate[];

}

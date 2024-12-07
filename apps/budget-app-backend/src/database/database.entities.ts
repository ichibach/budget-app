import { Account } from "src/modules/account/entities/account.entity";
import { Category } from "src/modules/category/entities/category.entity";
import { CurrencyRate } from "src/modules/currency/entities/currency-rate.entity";
import { Currency } from "src/modules/currency/entities/currency.entity";
import { Operation } from "src/modules/operation/entities/operation.entity";
import { ScheduledOperation } from "src/modules/scheduled-operation/entities/scheduled-operation.entity";
import { Icon } from "src/modules/static-content/entities/icon.entity";
import { User } from "src/modules/user/entities/user.entity";



export const entities = [
  User,
  Account,
  Category,
  Icon,
  Operation,
  ScheduledOperation,
  Currency,
  CurrencyRate
];

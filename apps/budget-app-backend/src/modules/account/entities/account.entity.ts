import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { Icon } from "../../static-content/entities/icon.entity";
import { AccountType } from "./account-type.enum";
import { User } from "../../user/entities/user.entity";
import { DefaultDatabaseEntity } from "src/shared/database/default.entity";
import { CurrencyColumnArgs } from "src/shared/app/currency-column.args";
import { BalanceColumnArgs } from "src/shared/app/balance-column.args";

@Entity('account')
export class Account extends DefaultDatabaseEntity<Account> {

  @Column('varchar', { nullable: false })
  name: string;

  @ManyToOne(type => Icon, { nullable: true })
  icon: Icon;

  @Column('text')
  description: string;

  @Column('enum', {enum: AccountType, enumName: 'AccountType' })
  account_type: AccountType;

  @Column(...CurrencyColumnArgs)
  currency: string;

  @Column(...BalanceColumnArgs)
  current_balance: number;

  @Column('boolean', { nullable: false, default: true })
  is_into_general_balance: boolean;

  @ManyToOne(type => User, user => user.accounts)
  user: User;
}

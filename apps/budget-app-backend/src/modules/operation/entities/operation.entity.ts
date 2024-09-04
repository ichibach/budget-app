import {
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToMany,
  OneToOne,
} from 'typeorm';
import { OperationType } from './operation-type.enum';
import { Category } from '../../category/entities/category.entity';
import { Account } from '../../account/entities/account.entity';
import { User } from '../../user/entities/user.entity';
import { ScheduledOperation } from '../../scheduled-operation/entities/scheduled-operation.entity';
import { DefaultDatabaseEntity } from 'src/shared/database/default.entity';
import { BalanceColumnArgs } from 'src/shared/app/balance-column.args';

@Entity('operation')
export class Operation extends DefaultDatabaseEntity<Operation> {
  @Column('enum', { enum: OperationType, enumName: 'OperationType' })
  operation_type: OperationType;

  @Column('text')
  description: string;

  @ManyToMany((type) => Category, (category) => category.operations)
  category: Category;

  @ManyToOne((type) => Account, { nullable: true })
  @JoinColumn()
  fromAccount: Account;

  @ManyToOne((type) => Account, { nullable: true })
  @JoinColumn()
  toAccount: Account;

  @Column(...BalanceColumnArgs)
  fromAmount: number;

  @Column(...BalanceColumnArgs)
  toAmount: number;

  @ManyToOne((type) => User, (user) => user.operations)
  user: User;

  @OneToOne((type) => ScheduledOperation, { nullable: true })
  scheduledOperation: ScheduledOperation;
}

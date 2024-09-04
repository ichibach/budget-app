import { Column, Entity, OneToMany } from "typeorm";
import { Account } from "../../account/entities/account.entity";
import { Category } from "../../category/entities/category.entity";
import { Operation } from "../../operation/entities/operation.entity";
import { ScheduledOperation } from "../../scheduled-operation/entities/scheduled-operation.entity";
import { DefaultDatabaseEntity } from "src/shared/database/default.entity";

@Entity('user')
export class User extends DefaultDatabaseEntity<User> {
  
  @Column('varchar', { nullable: false, unique: true })
  username: string;

  @Column('varchar', { nullable: false })
  hashPassword: string;

  @OneToMany(type => Account, account => account.user)
  accounts: Account[];

  @OneToMany(type => Category, category => category.user)
  categories: Category[];

  @OneToMany(type => Operation, operation => operation.user)
  operations: Operation[];

  @OneToMany(type => ScheduledOperation, scheduledOperation => scheduledOperation.user)
  scheduledOperations: ScheduledOperation[];

}

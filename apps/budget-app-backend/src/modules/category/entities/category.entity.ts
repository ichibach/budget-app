import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany } from "typeorm";
import { CategoryType } from "./category-type.enum";
import { User } from "../../user/entities/user.entity";
import { Operation } from "../../operation/entities/operation.entity";
import { Icon } from "../../static-content/entities/icon.entity";
import { DefaultDatabaseEntity } from "src/shared/database/default.entity";
import { CurrencyColumnArgs } from "src/shared/app/currency-column.args";


@Entity('category')
export class Category extends DefaultDatabaseEntity<Category> {

  @Column('varchar')
  name: string;

  @Column('enum', { enum: CategoryType, enumName: 'CategoryType' })
  type: CategoryType;

  @ManyToOne(type => Icon)
  @JoinColumn()
  icon: Icon;

  @Column(...CurrencyColumnArgs)
  currency: string;

  @ManyToOne(type => User, user => user.categories)
  user: User;

  @ManyToMany(type => Operation, operation => operation.category)
  operations: Operation[];

  @ManyToOne((type) => Category, (category) => category.children, { nullable: true })
  parent: Category

  @OneToMany((type) => Category, (category) => category.parent)
  children: Category[]

}

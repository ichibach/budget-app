import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from 'typeorm';
import { Operation } from '../../operation/entities/operation.entity';
import { User } from '../../user/entities/user.entity';
import { DefaultDatabaseEntity } from 'src/shared/database/default.entity';

@Entity('scheduled-operation')
export class ScheduledOperation extends DefaultDatabaseEntity<ScheduledOperation> {
  @Column('varchar')
  name: string;

  @Column('boolean', { default: false })
  repeat: boolean;

  @Column('varchar', { length: 50 })
  repeat_expression: string;

  @Column('boolean', { default: true })
  enable_notification: boolean;

  @OneToOne((type) => Operation)
  @JoinColumn()
  operation: Operation;

  @ManyToOne((type) => User, (user) => user.scheduledOperations)
  user: User;
}

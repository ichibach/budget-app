import { CreateDateColumn, DeleteDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


export abstract class DefaultDatabaseEntity<T> {
  constructor(data?: Partial<T>) {
    if (data) Object.assign(this, data);
  }

  @PrimaryGeneratedColumn()
  public id: number;

  @CreateDateColumn()
  public createdAt?: Date;

  @UpdateDateColumn()
  public updatedAt?: Date;

  @DeleteDateColumn()
  public deletedAt?: Date | null;
}
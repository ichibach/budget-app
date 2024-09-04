import { DefaultDatabaseEntity } from "src/shared/database/default.entity";
import { Column, Entity } from "typeorm";

@Entity('icon')
export class Icon extends DefaultDatabaseEntity<Icon> {

  @Column('varchar', { nullable: false })
  path: string;
}

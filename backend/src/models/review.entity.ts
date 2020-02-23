import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Review extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  title: string;

  @Column()
  detail: string;
}

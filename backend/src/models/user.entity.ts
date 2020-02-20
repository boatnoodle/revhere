import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  // @Column()
  // uid: string;

  // @Column()
  // picture: string;

  @Column()
  email: string;

  @Column()
  name: string;

  @Column()
  role: string;
}

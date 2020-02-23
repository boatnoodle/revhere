import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from "typeorm";

export enum UserRole {
  USER = "user",
  ADMIN = "admin"
}

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  uid: string;

  @Column()
  email: string;

  @Column()
  name: string;

  @Column({ type: "enum", enum: UserRole, default: UserRole.USER })
  role: UserRole;
}

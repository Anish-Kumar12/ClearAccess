import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Request } from "./request";

export type UserRole = 'Employee' | 'Manager' | 'Admin';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ unique: true })
  username: string;

  @Column()
  password: string;

  @Column({ type: "enum", enum: ['Employee', 'Manager', 'Admin'] })
  role: UserRole;

  @OneToMany(() => Request, (request) => request.user)
  requests: Request[];
}

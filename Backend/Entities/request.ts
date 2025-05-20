import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { User } from "./user";
import { Software } from "./software";

@Entity()
export class Request {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => User, (user) => user.requests)
  user!: User;

  @ManyToOne(() => Software, (software) => software.requests)
  software!: Software;

  @Column()
  accessType!: 'Read' | 'Write' | 'Admin';

  @Column("text")
  reason!: string;

  @Column()
  status!: 'Pending' | 'Approved' | 'Rejected';
}

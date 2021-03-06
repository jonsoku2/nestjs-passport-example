import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { TaskStatus } from './task-status.enum';
import { ManyToOne } from 'typeorm/index';
import { User } from '../auth/auth.entity';

@Entity()
export class Task extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  status: TaskStatus;

  @Column()
  userId: number;

  @ManyToOne(type => User, user => user.tasks, { eager: false })
  user: User;
}
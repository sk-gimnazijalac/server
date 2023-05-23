import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'posts' })
export class Posts {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column()
  title: string;

  @Column()
  content: string;

  @Column()
  createdAt: Date;
}

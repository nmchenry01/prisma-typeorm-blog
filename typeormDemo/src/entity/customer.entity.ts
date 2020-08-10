import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Product } from './product.entity';

@Entity()
export class Customer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  username: string;

  @Column({ unique: true })
  email: string;

  @CreateDateColumn()
  createdAt: string;

  @ManyToMany(() => Product, (product) => product.customers, { eager: true })
  @JoinTable()
  products: Product[];
}

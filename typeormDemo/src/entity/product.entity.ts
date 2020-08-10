import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
  ManyToMany,
} from 'typeorm';
import { Company } from './company.entity';
import { Customer } from './customer.entity';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @Column({ nullable: true })
  description?: string;

  @CreateDateColumn()
  createdAt: string;

  @ManyToOne(() => Company, (company) => company.products)
  @JoinColumn({ name: 'companyId' })
  company: Company;

  @ManyToMany(() => Customer, (customer) => customer.products)
  customers: Customer[];
}

import { Client } from './Client';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';

@Entity('products')
export class Product {
  @PrimaryGeneratedColumn()
  id: number

  @Column({type: 'text'})
  name: string

  @Column({type: 'number'})
  partNumber: number

  @Column({type: 'text'})
  serialNumber: string

  @ManyToOne(() => Client, client => client.products)
  @JoinColumn({name: 'client_id'})
  client: Client
}

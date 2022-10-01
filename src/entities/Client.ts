import { Product } from './Product';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity('clients')
export class Client {
  @PrimaryGeneratedColumn()
  id: number

  @Column({type: 'text'})
  name: string

  @OneToMany(() => Product, (product) => product.client )
  products: Product[]

}
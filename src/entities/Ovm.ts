import { Client } from './Client';
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('ovms')
export class Ovm {
  @PrimaryGeneratedColumn('uuid')
  id: number

  @Column({type: 'text'})
  numeroOvm: 'string'
  
  @ManyToMany(() => Client, client => client.ovms)
  @JoinTable({
    name: 'client_ovm',
    joinColumn: {
      name: 'clien_id',
      referencedColumnName: 'id'
    },
    inverseJoinColumn: {
      name: 'clien_id',
      referencedColumnName: 'id'
    }
  })
  client: Client[]
}
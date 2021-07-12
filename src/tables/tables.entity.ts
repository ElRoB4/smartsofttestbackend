import { Entity, Column, PrimaryGeneratedColumn,OneToMany, ManyToOne,JoinColumn  } from 'typeorm';
import { Exclude,Transform} from 'class-transformer';


//Datos de TableType
@Entity('TableData1')
export class TableData1 {

  @PrimaryGeneratedColumn() Id?: number;

  @Column() 
  T1C1: number;

  @Column({ length: 50 })
  T1C2: string;

  @Column({nullable:true}) 
  T1C3: number;

  @Column() 
  T1C4:  Date;

}
import { Entity, Column, PrimaryGeneratedColumn,OneToMany, ManyToOne,JoinColumn  } from 'typeorm';
import { Exclude,Transform} from 'class-transformer';


//Datos de TableType
@Entity('TableType')
export class TableType {
  @PrimaryGeneratedColumn() Id: number;

  @Column({ length: 30 })
  Name: string;
 
  @OneToMany(()=> TableStructure, TableStructure => TableStructure.tablas )
  //@JoinColumn()
  Columnas:TableStructure[]
  

}
//Datos de TableStructure
@Entity('TableStructure')
export class TableStructure{  

  @PrimaryGeneratedColumn() 
  Id: number;
  
  @Exclude()
  TableTypeId :number

  @Column({ length: 20 })
  Header: string;

  @Column({ length: 20 })
  DataType : string;
  
  @Column({length: 20 , nullable:true})
 
  Format : string;


  @Column()
  Required:boolean  

  @ManyToOne(() => TableType, tablas => tablas.Columnas)  
  @JoinColumn({name : 'TableTypeId', referencedColumnName : 'Id'})
  tablas: TableType;

  

}




/*
@Entity('TableDetail')
export class TableDetail{

@OneToOne(type=> TableType)
@JoinColumn()
Tabla :TableType

@OneToMany(type => TableStruct, TableStruct => TableStruct)
@Column()
Columnas :TableStruct[]
}*/
import { Delete, Injectable, Param } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';
import { TableData1 } from './tables.entity';
//import { TableStructure } from './configuration.entity';
//import { TableDetail } from './configuration.entity';

@Injectable()
export class TablesService {

    constructor(
   @InjectRepository(TableData1) private readonly TableData1Repository : Repository<TableData1>,
   // @InjectRepository(TableDetail) private readonly tableDetailRepository: Repository<TableDetail>
   //@InjectRepository(TableStructure) private readonly tableStructRepository: Repository<TableStructure>, 
    ){}

    async getTableDatas(): Promise<TableData1[]>{
      return await this.TableData1Repository.find();
    }

    async getTableData(id): Promise<TableData1[]>{
        return await this.TableData1Repository.find(id);
      }


    insertTableData1(data) {
        const inTableData1 = new TableData1();
        inTableData1.T1C1 = data.T1C1;
        inTableData1.T1C2 = data.T1C2;
        inTableData1.T1C3 = data.T1C3;
        inTableData1.T1C4 = data.T1C4;
       
        this.TableData1Repository.save(inTableData1);
      }
      deleteTableData1(Id) {
        this.TableData1Repository.remove(Id);
      }
      async updateTableData1(data) {
        const upTableData1 = await this.TableData1Repository.findOne(data.id);

        upTableData1.T1C1 = data.T1C1;
        upTableData1.T1C2 = data.T1C2;
        upTableData1.T1C3 = data.T1C3;
        upTableData1.T1C4 = data.T1C4;
        await this.TableData1Repository.save(upTableData1);
      }
 /*
    async getTableDetail() {
      let TableDetails = await this.tableTypeRepository.find({ relations: ["Columnas"] });
   
      return (JSON.stringify(TableDetails, (key, value) => {
        if (value !== null) return value
      }))
      
    }*/
  }


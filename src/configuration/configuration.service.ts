import { Delete, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { NULL } from 'graphql/language/kinds';
import { Repository } from 'typeorm';
import { TableType } from './configuration.entity';
import { TableStructure } from './configuration.entity';
//import { TableDetail } from './configuration.entity';

@Injectable()
export class ConfigurationService {

    constructor(
   @InjectRepository(TableType) private readonly tableTypeRepository : Repository<TableType>,
   // @InjectRepository(TableDetail) private readonly tableDetailRepository: Repository<TableDetail>
   @InjectRepository(TableStructure) private readonly tableStructRepository: Repository<TableStructure>, 
    ){}

    async getTables(): Promise<TableType[]>{
      return await this.tableTypeRepository.find();
    }
    
 
    async getTableDetail() {
      let TableDetails = await this.tableTypeRepository.find({ relations: ["Columnas"] });
   
      return (JSON.stringify(TableDetails, (key, value) => {
        if (value !== null) return value
      }))
      
    }
  }


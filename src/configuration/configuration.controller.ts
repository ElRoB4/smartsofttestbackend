
import { Controller, Get, Post, Body, Delete, Put, Param, Query, UsePipes, Header } from '@nestjs/common';
import { ConfigurationService } from './configuration.service';
import { TableType } from './configuration.entity';

import { TableStructure } from './configuration.entity';
import { ValidationPipe } from './configuration.pipes';



@Controller('configuration')
export class ConfigurationController {

  constructor(private readonly configurationService: ConfigurationService) { }

  @Get('getTables')
 // @Header('Content-Type', 'application/json')
  getTables(@Query() query): Promise<TableType[]> {
    return this.configurationService.getTables();
  }

  @Get('/getTableDetail')
  //@Header('Content-Type', 'application/json')
  getTableDetail() {    
    return this.configurationService.getTableDetail();
  }
} 
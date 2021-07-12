
import { Controller, Get, Post, Body, Delete, Put, Param, Query, UsePipes, Header } from '@nestjs/common';
import { TablesService } from './tables.service';
import { TableData1 } from './tables.entity';
import { ValidationPipe } from "./tables.pipes";
//import { TableStructure } from './configuration.entity';
//import { ValidationPipe } from './configuration.pipes';



@Controller('tables')
export class TablesController {

  constructor(private readonly tablesService: TablesService) { }

  @Get()
  @Header('Content-Type', 'application/json')
  getTableDatas(@Query() query): Promise<TableData1[]> {
    return this.tablesService.getTableDatas();
  }
  @Get(':id')
  getTableData(@Param() params) {
    return this.tablesService.getTableData(params.id);
  }
  @Post()
  //@UsePipes(ValidationPipe)
  saveTableData1(@Body() tableDate1: TableData1) {
   
    if (tableDate1.Id) {
      this.tablesService.updateTableData1(tableDate1);
    } else {
      this.tablesService.insertTableData1(tableDate1);
    }
  }

  @Delete()
  deletePhoto(@Body() id: number) {
    this.tablesService.deleteTableData1(id);
  }
/*
  @Get('/getTableDetail')
  @Header('Content-Type', 'application/json')
  getTableDetail() {    
    return this.configurationService.getTableDetail();
  }*/
} 
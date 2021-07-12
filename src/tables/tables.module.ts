import { Module } from '@nestjs/common';
import { TablesService } from './tables.service';
import { TablesController } from './tables.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TableData1 } from './tables.entity';
@Module({
  imports:[TypeOrmModule.forFeature([TableData1])],
  providers: [TablesService],
  controllers: [TablesController]
})
export class TablesModule {}

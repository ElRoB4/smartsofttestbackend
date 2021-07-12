import { Module } from '@nestjs/common';
import { ConfigurationController } from './configuration.controller';
import { ConfigurationService } from './configuration.service';

import { TypeOrmModule } from '@nestjs/typeorm';
import { TableType } from './configuration.entity';
import { TableStructure } from './configuration.entity';

@Module({
  imports:[TypeOrmModule.forFeature([TableType,TableStructure])],
  controllers: [ConfigurationController],
  providers: [ConfigurationService]
})
export class ConfigurationModule {}




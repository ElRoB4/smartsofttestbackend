import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { ConfigurationModule } from './configuration/configuration.module';
//import { TableDetailModule } from './table-detail/table-detail.module';
import { TablesModule } from './tables/tables.module';
@Module({
  imports: [TypeOrmModule.forRoot(), GraphQLModule.forRoot({
    typePaths: ['./**/*.graphql'],
    installSubscriptionHandlers: true,
  }), ConfigurationModule, TablesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private readonly connection: Connection) { }
}

import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';

import { TransactionsModule } from './app/transactions/transactions.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import * as databaseConfig from './infra/database/config';
import { modelsArray } from './models';

const config = new ConfigService();
const environmentName = config.get<string>('NODE_ENV') || 'development';
const databaseOptions = databaseConfig[environmentName];

@Module({
  imports: [
    SequelizeModule.forRoot({
      ...databaseOptions,
      models: modelsArray,
    }),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TransactionsModule
  ],
  controllers: [AppController],
  providers: [ConfigService, AppService],
})
export class AppModule {}

import { Test, TestingModule } from '@nestjs/testing';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { testDatabase } from './test-database';

import { AppController } from '../src/app.controller';
import { AppService } from '../src/app.service';

import { TransactionsModule } from '../src/app/transactions/transactions.module';

export async function testModule(): Promise<TestingModule> {
  return await Test.createTestingModule({
    imports: [
      testDatabase,
      ConfigModule.forRoot({
        isGlobal: true,
      }),
      TransactionsModule
    ],
    controllers: [AppController],
    providers: [ConfigService, AppService],
  }).compile();
}

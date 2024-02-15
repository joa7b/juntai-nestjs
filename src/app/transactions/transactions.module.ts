import { Module } from '@nestjs/common';

import { TransactionsService } from './transactions.service';

import { TransactionsController } from './transactions.controller';

import { transactionsProviders } from './transactions.providers';

@Module({
  imports: [],
  controllers: [TransactionsController],
  providers: [
    ...transactionsProviders,
    TransactionsService
  ],
})
export class TransactionsModule {}
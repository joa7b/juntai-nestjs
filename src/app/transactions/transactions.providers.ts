import { Transaction } from './models/transaction.model';

export const transactionsProviders = [
  {
    provide: 'TRANSACTIONS_REPOSITORY',
    useValue: Transaction,
  },
];
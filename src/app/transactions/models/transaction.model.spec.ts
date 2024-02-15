import { TestingModule } from '@nestjs/testing';
import { Sequelize } from 'sequelize-typescript';
import { faker } from '@faker-js/faker';

import { testModule } from '../../../../test/test-module';

import { Transaction } from './transaction.model';

describe('TransactionModel', () => {
  let sequelize: Sequelize;
  let transactionParams: any;

  beforeEach(async () => {
    const module: TestingModule = await testModule();

    sequelize = module.get<Sequelize>(Sequelize);

    transactionParams = {
      name: faker.lorem.word(),
      description: faker.lorem.paragraph(),
      amount: faker.number.float(),
      kind: 'income',
      category: faker.lorem.word(),
      userId: 1,
      status: 'not_paid',
    };
  });

  afterAll(async () => {
    await sequelize.close();
  });

  it('should be defined', () => {
    expect(Transaction).toBeDefined();
  });

  it('should create a transaction', async () => {
    const transaction = await Transaction.create(transactionParams);

    expect(transaction).toBeDefined();
    expect(transaction.id).toBeDefined();
    expect(transaction.name).toEqual(transactionParams.name);
    expect(transaction.description).toEqual(transactionParams.description);
    expect(transaction.amount).toEqual(transactionParams.amount);
    expect(transaction.paidAt).toEqual(transactionParams.paidAt);
    expect(transaction.kind).toEqual(transactionParams.kind);
    expect(transaction.category).toEqual(transactionParams.category);
    expect(transaction.userId).toEqual(transactionParams.userId);
    expect(transaction.status).toEqual(transactionParams.status);
  });
});
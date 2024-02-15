import { TestingModule } from '@nestjs/testing';
import { Sequelize } from 'sequelize-typescript';
import { faker } from '@faker-js/faker';

import { testModule } from '../../../test/test-module';

import { Transaction } from './models/transaction.model';

import { TransactionsController } from './transactions.controller';

import { TransactionsService } from './transactions.service';

import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';

describe('TransactionsController', () => {
  let sequelize: Sequelize;
  let controller: TransactionsController;
  let service: TransactionsService;
  let transactionParams: CreateTransactionDto & UpdateTransactionDto;

  beforeAll(async () => {
    const module: TestingModule = await testModule();

    sequelize = module.get<Sequelize>(Sequelize);

    controller = module.get<TransactionsController>(TransactionsController);
    service = module.get<TransactionsService>(TransactionsService);

    transactionParams = {
      name: faker.lorem.word(),
      description: faker.lorem.paragraph(),
      amount: faker.number.int(),
      kind: 'income',
      category: faker.lorem.word(),
      status: 'not_paid',
    };
  });

  afterAll(async () => {
    await sequelize.close();
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('endpoints', () => {
    describe('POST /transactions', () => {
      it('should be defined', () => {
        expect(controller.create).toBeDefined();
      });

      it('should create a transaction', async () => {
        const transaction = await controller.create({id: 1}, transactionParams);

        expect(transaction).toBeDefined();
        expect(transaction.id).toBeDefined();
        expect(transaction.name).toEqual(transactionParams.name);
        expect(transaction.description).toEqual(transactionParams.description);
        expect(transaction.amount).toEqual(transactionParams.amount);
        expect(transaction.kind).toEqual(transactionParams.kind);
        expect(transaction.category).toEqual(transactionParams.category);
        expect(transaction.status).toEqual(transactionParams.status);
      });
    });

    describe('POST /transactions/:id', () => {
      it('should be defined', () => {
        expect(controller.update).toBeDefined();
      });

      it('should update a transaction', async () => {
        const transaction = await controller.update({id: 1}, {id: 1}, transactionParams);

        expect(transaction).toBeDefined();
      });
    });

    describe('GET /transactions', () => {
      it('should be defined', () => {
        expect(controller.findAll).toBeDefined();
      });

      it('should return all transactions', async () => {
        const transactions = await controller.findAll({id: 1});

        expect(transactions).toBeDefined
        expect(transactions.length).toBeGreaterThan(0);
      });
    });

    describe('GET /transactions/:id', () => {
      it('should be defined', () => {
        expect(controller.findOne).toBeDefined();
      });

      it('should return a transaction', async () => {
        const transaction = await controller.findOne({id: 1}, '1');

        expect(transaction).toBeDefined();
        expect(transaction.id).toBeDefined();
      });
    });

    describe('DELETE /transactions/:id', () => {
      it('should be defined', () => {
        expect(controller.remove).toBeDefined();
      });

      it('should delete a transaction', async () => {
        const transaction = await controller.remove({id: 1}, '1');

        expect(transaction).toBeDefined();
      });
    });
  });
});
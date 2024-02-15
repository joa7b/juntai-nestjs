import { TestingModule } from "@nestjs/testing";
import { Sequelize } from "sequelize-typescript";
import { faker } from '@faker-js/faker';

import { testModule } from "../../../test/test-module";

import { Transaction } from "./models/transaction.model";

import { TransactionsService } from "./transactions.service";

import { CreateTransactionDto } from "./dto/create-transaction.dto";

describe('TransactionsService', () => {
  let sequelize: Sequelize;
  let service: TransactionsService;
  let transactionsParams: CreateTransactionDto;

  beforeAll(async () => {
    const module: TestingModule = await testModule();

    sequelize = module.get<Sequelize>(Sequelize);

    service = module.get<TransactionsService>(TransactionsService);

    transactionsParams = {
      name: faker.lorem.word(),
      description: faker.lorem.paragraph(),
      kind: 'income',
      amount: faker.number.float(),
      category: faker.lorem.word(),
      status: 'not_paid'
    };
  });

  afterAll(async () => {
    await sequelize.close();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('instance methods', () => {
    describe('#create', () => {
      it('should be defined', () => {
        expect(service.create).toBeDefined();
      });

      it('should create a transaction', async () => {
        const transaction = await service.create(transactionsParams, 1);

        expect(transaction).toBeDefined();
        expect(transaction.name).toEqual(transactionsParams.name);
        expect(transaction.description).toEqual(transactionsParams.description);
        expect(transaction.kind).toEqual(transactionsParams.kind);
        expect(transaction.amount).toEqual(transactionsParams.amount);
        expect(transaction.category).toEqual(transactionsParams.category);
        expect(transaction.status).toEqual(transactionsParams.status);
      });
    });

    describe('#update', () => {
      it('should be defined', () => {
        expect(service.update).toBeDefined();
      });

      it('should update a transaction', async () => {
        const transaction = await service.create(transactionsParams, 1);

        const updatedTransaction = await service.update({
          name: 'Updated name',
          description: 'Updated description',
          kind: 'expense',
          amount: 100,
          category: 'Updated category',
          status: 'paid',
        }, transaction.id, 1);

        expect(updatedTransaction).toBeDefined();
      });
    });

    describe('#findAll', () => {
      it('should be defined', () => {
        expect(service.findAll).toBeDefined();
      });

      it('should return all transactions', async () => {
        const transactions = await service.findAll(1);

        expect(transactions).toBeDefined();
      });
    });

    describe('#findOne', () => {
      it('should be defined', () => {
        expect(service.findOne).toBeDefined();
      });

      it('should return a transaction', async () => {
        const transaction = await service.create(transactionsParams, 1);

        const foundTransaction = await service.findOne(transaction.id, 1);

        expect(foundTransaction).toBeDefined();
      });

      it('should throw an error if transaction not found', async () => {
        try {
          await service.findOne(1000, 1);
        } catch (err) {
          expect(err).toBeDefined();
        }
      });
    });
  })
});
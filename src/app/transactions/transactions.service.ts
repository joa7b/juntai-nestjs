import { Injectable, Inject, UnprocessableEntityException } from '@nestjs/common';

import { Transaction } from './models/transaction.model';

import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';

@Injectable()
export class TransactionsService {
  constructor(
    @Inject('TRANSACTIONS_REPOSITORY')
    private transactionsRepository: typeof Transaction
  ) { }

  async create(createTransactionDto: CreateTransactionDto, userId: number) {
    try {
      const transaction = {
        ...createTransactionDto,
        userId,
      }
      return await this.transactionsRepository.create(transaction);
    } catch (err) {
      throw new UnprocessableEntityException(err);
    }
  }

  async update(data: UpdateTransactionDto, transactionId: number, userId: number) {
    try {
      const transaction = await this.transactionsRepository.findOne({
        where: {
          id: transactionId,
          userId
        }
      });

      if (!transaction) {
        throw new Error('Transaction not found');
      }

      return await transaction.update(data);
    } catch (err) {
      throw new UnprocessableEntityException(err);
    }
  }

  async findAll(userId: number) {
    try {
      return await this.transactionsRepository.findAll({
        where: {
          userId
        }
      });
    } catch (err) {
      throw new UnprocessableEntityException(err);
    }
  }

  async findOne(id: number, userId: number) {
    try {
      return await this.transactionsRepository.findOne({
        where: {
          id,
          userId
        }
      });
    } catch (err) {
      throw new UnprocessableEntityException(err);
    }
  }

  async remove(id: number, userId: number) {
    try {
      const transaction = await this.transactionsRepository.findOne({
        where: {
          id,
          userId
        }
      });

      if (!transaction) {
        throw new Error('Transaction not found');
      }

      return await transaction.destroy();
    } catch (err) {
      throw new UnprocessableEntityException(err);
    }
  }
}
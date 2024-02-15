import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  HttpCode,
  UnprocessableEntityException,
  NotFoundException,
  Query,
  Put,
} from '@nestjs/common';

import { CurrentUser } from '../decorators/current_user.decorator';

import { TransactionsService } from './transactions.service';

import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateQueryParamsDto } from './dto/update-query-params.dto';

@Controller('api/transactions')
export class TransactionsController {
  constructor(private readonly transactionsService: TransactionsService) { }

  @Post()
  create(
    @CurrentUser() user: any,
    @Body() createTransactionDto: CreateTransactionDto
  ) {
    try {
      return this.transactionsService.create(createTransactionDto, 1);
    } catch (error) {
      console.log(error);
      throw new UnprocessableEntityException('Error creating transactions')
    }
  }

  @Put(':id')
  update(
    @CurrentUser() user: any,
    @Param() query: UpdateQueryParamsDto,
    @Body() createTransactionDto: CreateTransactionDto
  ) {
    try {
      const params = {
        id: query.id,
      };

      return this.transactionsService.update(createTransactionDto, +params.id, 1);
    } catch (error) {
      console.log(error);
      throw new UnprocessableEntityException('Error updating transactions')
    }
  }

  @Get()
  findAll(@CurrentUser() user: any) {
    try {
      return this.transactionsService.findAll(1);
    } catch (error) {
      console.log(error);
      throw new NotFoundException('Transactions not found')
    }
  }

  @Get(':id')
  findOne(@CurrentUser() user: any, @Param('id') id: string) {
    try {
      return this.transactionsService.findOne(+id, 1);
    } catch (error) {
      console.log(error);
      throw new NotFoundException('Transaction not found')
    }
  }

  @Delete(':id')
  remove(@CurrentUser() user: any, @Param('id') id: string) {
    try {
      return this.transactionsService.remove(+id, 1);
    } catch (error) {
      console.log(error);
      throw new NotFoundException('Transaction not found')
    }
  }

}
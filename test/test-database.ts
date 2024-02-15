import { SequelizeModule } from '@nestjs/sequelize';
import { test as databaseConfig } from '../src/infra/database/config';
import { modelsArray } from '../src/models';

export const testDatabase = SequelizeModule.forRoot({
  ...databaseConfig,
  models: modelsArray,
} as any);

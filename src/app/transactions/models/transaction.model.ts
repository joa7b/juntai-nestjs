import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({
  tableName: 'transactions',
  paranoid: true,
  underscored: true,
})
export class Transaction extends Model<Transaction> {
  @Column({
    primaryKey: true,
    autoIncrement: true,
    type: DataType.BIGINT,
  })
  id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.STRING,
  })
  description: string;

  @Column({
    type: DataType.FLOAT,
    allowNull: false,
  })
  amount: number;

  @Column({
    type: DataType.DATE,
  })
  paidAt: Date;

  @Column({
    type: DataType.ENUM('income', 'expense'),
    allowNull: false,
  })
  kind: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  category: string;

  @Column({
    type: DataType.BIGINT,
    allowNull: false,
  })
  userId: number;

  @Column({
    type: DataType.ENUM('paid', 'not_paid', 'pending'),
    allowNull: false,
  })
  status: string;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  createdAt: Date;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  updatedAt: Date;

  @Column({
    type: DataType.DATE,
  })
  deletedAt: Date;
}
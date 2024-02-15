'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    const now = new Date();

    await queryInterface.bulkInsert('transactions', [
      {
        name: 'Transaction 1',
        description: 'Transaction 1 description',
        amount: 1000,
        kind: 'expense',
        category: 'category 1',
        user_id: 1,
        status: 'pending',
        created_at: now,
        updated_at: now,
        deleted_at: null
      },
      {
        name: 'Transaction 2',
        description: 'Transaction 2 description',
        amount: 2000,
        kind: 'expense',
        category: 'category 1',
        user_id: 1,
        status: 'paid',
        paid_at: now,
        created_at: now,
        updated_at: now,
        deleted_at: null
      },
      {
        name: 'Transaction 3',
        description: 'Transaction 3 description',
        amount: 3000,
        kind: 'expense',
        category: 'category 1',
        user_id: 1,
        status: 'not_paid',
        paid_at: now,
        created_at: now,
        updated_at: now,
        deleted_at: null
      },
      {
        name: 'Transaction 4',
        description: 'Transaction 4 description',
        amount: 4000,
        kind: 'expense',
        category: 'category 1',
        user_id: 1,
        status: 'paid',
        paid_at: now,
        created_at: now,
        updated_at: now,
        deleted_at: null
      },
      {
        name: 'Transaction 5',
        description: 'Transaction 5 description',
        amount: 5000,
        kind: 'expense',
        category: 'category 1',
        user_id: 1,
        status: 'paid',
        paid_at: now,
        created_at: now,
        updated_at: now,
        deleted_at: null
      },
      {
        name: 'Transaction 6',
        description: 'Transaction 6 description',
        amount: 6000,
        kind: 'expense',
        category: 'category 1',
        user_id: 1,
        status: 'paid',
        paid_at: now,
        created_at: now,
        updated_at: now,
        deleted_at: null
      },
      {
        name: 'Transaction 7',
        description: 'Transaction 7 description',
        amount: 7000,
        kind: 'expense',
        category: 'category 1',
        user_id: 1,
        status: 'not_paid',
        paid_at: now,
        created_at: now,
        updated_at: now,
        deleted_at: null
      },
      {
        name: 'Transaction 8',
        description: 'Transaction 8 description',
        amount: 8000,
        kind: 'expense',
        category: 'category 1',
        user_id: 2,
        status: 'pending',
        paid_at: null,
        created_at: now,
        updated_at: now,
        deleted_at: null
      },
      {
        name: 'Transaction 9',
        description: 'Transaction 9 description',
        amount: 9000,
        kind: 'expense',
        category: 'category 1',
        user_id: 2,
        status: 'pending',
        paid_at: null,
        created_at: now,
        updated_at: now,
        deleted_at: null
      },
      {
        name: 'Transaction 10',
        description: 'Transaction 10 description',
        amount: 10000,
        kind: 'expense',
        category: 'category 2',
        user_id: 2,
        status: 'pending',
        paid_at: null,
        created_at: now,
        updated_at: now,
        deleted_at: null
      },
      {
        name: 'Transaction 11',
        description: 'Transaction 11 description',
        amount: 11000,
        kind: 'expense',
        category: 'category 2',
        user_id: 2,
        status: 'pending',
        paid_at: null,
        created_at: now,
        updated_at: now,
        deleted_at: null
      },
      {
        name: 'Transaction 12',
        description: 'Transaction 12 description',
        amount: 12000,
        kind: 'expense',
        category: 'category 2',
        user_id: 2,
        status: 'paid',
        paid_at: now,
        created_at: now,
        updated_at: now,
        deleted_at: null
      },
      {
        name: 'Transaction 13',
        description: 'Transaction 13 description',
        amount: 13000,
        kind: 'expense',
        category: 'category 2',
        user_id: 2,
        status: 'paid',
        paid_at: now,
        created_at: now,
        updated_at: now,
        deleted_at: null
      },
      {
        name: 'Transaction 14',
        description: 'Transaction 14 description',
        amount: 14000,
        kind: 'expense',
        category: 'category 2',
        user_id: 2,
        status: 'paid',
        paid_at: now,
        created_at: now,
        updated_at: now,
        deleted_at: null
      },
      {
        name: 'Transaction 15',
        description: 'Transaction 15 description',
        amount: 15000,
        kind: 'expense',
        category: 'category 2',
        user_id: 2,
        status: 'pending',
        paid_at: null,
        created_at: now,
        updated_at: now,
        deleted_at: null
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('transactions', null, {});
  }
};

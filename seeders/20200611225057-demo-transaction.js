'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'transactions',
      [
        {
          startDate: '30/03/2020',
          dueDate: '30/04/2020',
          userId: 1,
          attache: 'bca.jpg',
          status: 'Approved',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('transactions', null, {});
  },
};

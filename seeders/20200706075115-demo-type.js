'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'types',
      [
        {
          id: 4,
          name: 'Solo',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 5,
          name: 'Group',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  },
};

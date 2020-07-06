'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'users',
      [
        {
          fullName: 'Iis Is',
          email: 'iis@gmail.com',
          password: 'lovespiderman',
          gender: 'male',
          phone: '083896831233',
          address: 'Jln. Marvel Universe, RT.21 RW.69',
          isAdmin: true,
          subscribe: true,
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

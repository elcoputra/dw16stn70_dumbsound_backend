'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('transactions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      startDate: {
        type: Sequelize.DATE,
      },
      dueDate: {
        type: Sequelize.DATE,
      },
      attachment: {
        type: Sequelize.STRING,
      },
      bankAccount: {
        type: Sequelize.STRING,
      },
      status: {
        type: Sequelize.ENUM('Approved', 'Pending', 'Denied'),
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('transactions');
  },
};

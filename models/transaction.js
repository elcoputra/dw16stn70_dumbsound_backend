'use strict';
module.exports = (sequelize, DataTypes) => {
  const transaction = sequelize.define(
    'transaction',
    {
      startDate: DataTypes.DATE,
      dueDate: DataTypes.DATE,
      userId: DataTypes.INTEGER,
      attachment: DataTypes.STRING,
      bankAccount: DataTypes.STRING,
      status: DataTypes.ENUM('Approved', 'Pending', 'Denied'),
    },
    {},
  );
  transaction.associate = function (models) {
    // associations can be defined here
    // di sini ngasih setting kalo ada userId di model ini
    transaction.belongsTo(models.user, {});
  };
  return transaction;
};

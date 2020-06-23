'use strict';
module.exports = (sequelize, DataTypes) => {
  const artist = sequelize.define(
    'artist',
    {
      typeId: DataTypes.INTEGER,
      name: DataTypes.STRING,
      old: DataTypes.INTEGER,
      startAcareer: DataTypes.INTEGER,
    },
    {},
  );
  artist.associate = function (models) {
    // associations can be defined here
    artist.belongsTo(models.type), artist.hasMany(models.song);
  };
  return artist;
};

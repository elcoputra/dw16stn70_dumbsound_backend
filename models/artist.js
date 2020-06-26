'use strict';
module.exports = (sequelize, DataTypes) => {
  const artist = sequelize.define(
    'artist',
    {
      typeId: DataTypes.INTEGER,
      name: DataTypes.STRING,
      old: DataTypes.INTEGER,
      startAcareer: DataTypes.INTEGER,
      bio: DataTypes.STRING(1000),
      pic: DataTypes.STRING(500),
      cover: DataTypes.STRING(500),
    },
    {},
  );
  artist.associate = function (models) {
    // associations can be defined here
    artist.belongsTo(models.type), artist.hasMany(models.song);
  };
  return artist;
};

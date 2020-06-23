'use strict';
module.exports = (sequelize, DataTypes) => {
  const song = sequelize.define(
    'song',
    {
      artistId: DataTypes.INTEGER,
      title: DataTypes.STRING,
      year: DataTypes.INTEGER,
      musicLink: DataTypes.STRING,
      thumbnailLink: DataTypes.STRING,
    },
    {},
  );
  song.associate = function (models) {
    // associations can be defined here
    song.belongsTo(models.artist);
  };
  return song;
};

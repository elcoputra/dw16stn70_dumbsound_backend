const { artist, Sequelize } = require('../../models');
const { type } = require('../../models');
const { song } = require('../../models');
const Op = Sequelize.Op;

/* GET users listing. */
exports.search = async (req, res) => {
  try {
    const songs = await song.findAll({
      // Sequelize Operators API on Model Querying - Basics
      // [Op.like]: '%hat',  LIKE '%hat'
      // search containt
      // where: { title: { [Op.like]: '%' + req.body.search + '%' } }, // use this if u use mysql
      where: { title: { [Op.iLike]: '%' + req.body.search + '%' } }, // use this if u use postgres
      include: {
        model: artist,
        attributes: {
          exclude: ['createdAt', 'updatedAt'],
        },
        include: {
          model: type,
          attributes: {
            exclude: ['createdAt', 'updatedAt'],
          },
        },
      },
      attributes: {
        exclude: ['createdAt', 'updatedAt'],
      },
    });
    if (!songs) {
      return res.send({ message: 'No Data' });
    }
    const dataLength = songs.length;

    let plural;
    if (dataLength >= 2) {
      plural = 'songs';
    } else {
      plural = 'song';
    }

    return res.send({ message: 'found ' + dataLength + ' ' + plural, data: songs });
  } catch (error) {
    return res.send({ error: error });
  }
};

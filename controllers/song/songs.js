const { artist } = require('../../models');
const { type } = require('../../models');
const { song } = require('../../models');

/* GET users listing. */
exports.reads = async (req, res) => {
  try {
    const songs = await song.findAll({
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
    return res.send({ data: songs });
  } catch (error) {
    return res.send({ error });
  }
};

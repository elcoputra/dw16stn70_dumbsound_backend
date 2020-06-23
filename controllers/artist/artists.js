const { artist } = require('../../models');
const { type } = require('../../models');

/* GET users listing. */
exports.reads = async (req, res) => {
  try {
    const artists = await artist.findAll({
      include: {
        model: type,
        attributes: {
          exclude: ['createdAt', 'updatedAt'],
        },
      },
      attributes: {
        exclude: ['createdAt', 'updatedAt'],
      },
    });
    return res.send({ data: artists });
  } catch (error) {
    return res.send({ error });
  }
};

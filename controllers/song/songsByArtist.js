const { song } = require('../../models');
const { artist } = require('../../models');

/* GET users listing. */
exports.reads = async (req, res) => {
  try {
    const data = await song.findAll({
      where: { artistId: req.params.id },
      include: {
        model: artist,
        attributes: {
          exclude: ['createdAt', 'updatedAt'],
        },
      },
      attributes: {
        exclude: ['createdAt', 'updatedAt'],
      },
    });
    return res.send({ data: data });
  } catch (error) {
    return res.send({ error });
  }
};

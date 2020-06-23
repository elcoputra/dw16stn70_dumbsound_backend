const { artist } = require('../../models');
const { type } = require('../../models');
const { song } = require('../../models');

exports.create = async (req, res, next) => {
  try {
    const feedback = await song.create(req.body);
    const { id } = feedback;
    const detail = await song.findOne({
      where: {
        id: id,
      },
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
    return res.send({
      message: 'Movie successfully added',
      data: detail,
    });
  } catch (error) {
    console.log(error);
    return res.send(error);
  }
};

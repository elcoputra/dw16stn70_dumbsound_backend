const { artist } = require('../../models');
const { type } = require('../../models');

exports.create = async (req, res, next) => {
  try {
    const feedback = await artist.create(req.body);
    const { id } = feedback;
    const detail = await artist.findOne({
      where: {
        id: id,
      },
      include: [
        {
          model: type,
          attributes: {
            exclude: ['createdAt', 'updatedAt'],
          },
        },
      ],
      attributes: {
        exclude: ['createdAt', 'updatedAt'],
      },
    });
    return res.send({
      message: 'Artist successfully added',
      data: detail,
    });
  } catch (error) {
    console.log(error);
    return res.send(error);
  }
};

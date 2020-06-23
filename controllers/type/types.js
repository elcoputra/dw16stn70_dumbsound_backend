const { type } = require('../../models');

/* GET users listing. */
exports.reads = async (req, res) => {
  try {
    const types = await type.findAll({
      attributes: {
        exclude: ['createdAt', 'updatedAt'],
      },
    });
    return res.send({ data: types });
  } catch (error) {
    return res.send({ error });
  }
};

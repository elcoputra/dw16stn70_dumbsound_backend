const { user } = require('../../models');

/* GET users listing. */
exports.reads = async (req, res) => {
  try {
    const userdata = await user.findAll({
      attributes: {
        exclude: ['createdAt', 'updatedAt', 'password'],
      },
      order: [['id', 'DESC']],
    });
    return res.send({ data: userdata });
  } catch (error) {
    return res.send({ error });
  }
};

const { user } = require('../../models');

exports.deleteUser = async (req, res) => {
  try {
    const report = await user.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!report) return res.status(400).send({ message: 'The id you provided does not exist' });
    return res.send({
      data: {
        status: 'User Deleted',
        id: req.params.id,
      },
    });
  } catch (error) {
    return res.send({ error });
  }
};

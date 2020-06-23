const { transaction } = require('../../models');
const { user } = require('../../models');

exports.update = async (req, res) => {
  try {
    // logic subscribe user
    if (req.body.status) {
      if (req.body.status == 'Approved') {
        await user.update(
          { subscribe: 'true' },
          {
            where: { id: req.body.userId },
          },
        );
      } else {
        await user.update(
          { subscribe: 'false' },
          {
            where: { id: req.body.userId },
          },
        );
      }
    }

    const report = await transaction.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!report) return res.status(400).send({ message: 'The id you provided does not exist' });

    const data = await transaction.findOne({
      where: { id: req.params.id },
      include: [
        {
          model: user,
          attributes: {
            exclude: ['createdAt', 'updatedAt', 'userId', 'password'],
          },
        },
      ],
      attributes: {
        exclude: ['createdAt', 'updatedAt', 'userId'],
      },
    });
    res.send({
      message: 'Succsess patching data transaction',
      transaction: { transaction: data },
    });
  } catch (error) {
    return res.send({ error });
  }
};

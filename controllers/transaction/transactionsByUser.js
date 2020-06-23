const { transaction } = require('../../models');
const { user } = require('../../models');

/* GET users listing. */
exports.reads = async (req, res) => {
  try {
    const userSearch = await user.findOne({
      where: {
        id: req.params.id,
      },
    });
    if (!userSearch) return res.send({ message: 'Not user by id: ' + req.params.id });

    const dataTransactionsByUser = await transaction.findAll({
      where: {
        userId: req.params.id,
      },
      attributes: {
        exclude: ['createdAt', 'updatedAt'],
      },
    });
    if (dataTransactionsByUser.length === 0) return res.send({ message: 'Not Transactions by user id: ' + req.params.id });
    return res.send({ data: dataTransactionsByUser });
  } catch (error) {
    return res.send({ error });
  }
};

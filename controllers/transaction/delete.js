const { transaction } = require('../../models');
exports.deleteTransaction = async (req, res) => {
  try {
    
    const report = await transaction.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!report) return res.status(400).send({ message: 'The id you provided does not exist' });
    return res.send({
      message: 'transaction with id: ' + req.params.id + ' deleted'
    });
  } catch (error) {
    return res.send({error});
  }
  };
const { song } = require('../../models');
exports.deleteSong = async (req, res) => {
  try {
    const report = await song.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!report) return res.status(400).send({ message: 'The id you provided does not exist' });
    return res.send({
      message: 'Song with id: ' + req.params.id + ' deleted',
    });
  } catch (error) {
    return res.send({ error });
  }
};

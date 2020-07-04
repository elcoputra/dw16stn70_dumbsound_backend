const { song } = require('../../models');

exports.updateSong = async (req, res) => {
  try {
    const report = await song.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!report) return res.status(400).send({ message: 'The id you provided does not exist' });

    return res.send({
      message: 'Song with ID: ' + req.params.id + ' successfully updated',
    });
  } catch (error) {
    return res.send({ error });
  }
};

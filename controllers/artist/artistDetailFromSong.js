const { song } = require('../../models');
const { artist } = require('../../models');
const { type } = require('../../models');

/* GET users listing. */
exports.read = async (req, res, next) => {
  try {
    const name = req.params.name;
    const nameWithSpace = name.replace(/%20/g, ' ');
    console.log(nameWithSpace);
    const detailSong = await song.findOne({
      where: { title: nameWithSpace },
      include: {
        model: artist,
        attributes: {
          exclude: ['createdAt', 'updatedAt'],
        },
      },
      attributes: {
        exclude: ['createdAt', 'updatedAt'],
      },
    });

    const detailArtist = await artist.findOne({
      where: { id: detailSong.artistId },
      include: {
        model: type,
        attributes: {
          exclude: ['createdAt', 'updatedAt'],
        },
      },
      attributes: {
        exclude: ['createdAt', 'updatedAt'],
      },
    });

    return res.send({ data: detailArtist });
  } catch (error) {
    return res.send({ error });
  }
};

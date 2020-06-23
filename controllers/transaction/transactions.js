const { transaction } = require('../../models');
const { user } = require('../../models');

/* GET users listing. */
exports.reads = async (req, res) => {
  try {
    // ini di bawah metode ngambil data buat yang sudah di assosiation
    const userdata = await transaction.findAll({
      include: [
        {
          model: user,
          attributes: {
            exclude: ['createdAt', 'updatedAt', 'password'],
          },
        },
      ],
      attributes: {
        exclude: ['createdAt', 'updatedAt'],
      },
    });
    return res.send({ data: userdata });
  } catch (error) {
    return res.send({ error });
  }
};

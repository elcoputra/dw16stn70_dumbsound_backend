const { transaction } = require('../../models');
const { user } = require('../../models');

/* GET users listing. */
exports.reads = async (req, res) => {
  try {
    // ini di bawah metode ngambil data buat yang sudah di assosiation
    let userdata;
    if (req.body.target === 'all') {
      userdata = await transaction.findAll({
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
        order: [['id', 'DESC']],
      });
    } else {
      userdata = await transaction.findAll({
        where: { status: req.body.target },
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
        order: [['id', 'DESC']],
      });
    }

    return res.send({ data: userdata });
  } catch (error) {
    return res.send({ error });
  }
};

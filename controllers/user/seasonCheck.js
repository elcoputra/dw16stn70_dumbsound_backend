const { user } = require('../../models');
const { transaction } = require('../../models');
const Moment = require('moment');
const { subscribe } = require('../../api');

/* GET users listing. */
exports.reads = async (req, res) => {
  try {
    // Logic subscribe false bila usah di di bawa 0 hari //
    // cari data transaksi dari user
    const trans = await transaction.findOne({
      where: {
        userId: req.decode.id,
      },
    });

    // menghitung jumlah hari
    if (trans) {
      const subscribeDays = Moment(trans.dueDate).diff(Date.now(), 'days');
      console.log(subscribeDays);
      if (subscribeDays <= 0) {
        await user.update(
          { subscribe: false },
          {
            where: {
              id: req.decode.id,
            },
          },
        );
        await transaction.destroy({
          where: {
            userId: req.decode.id,
          },
        });
      }
    }

    // cari user sesuai id dari token yang sudah di decode
    const userdata = await user.findOne({
      where: {
        id: req.decode.id,
      },
    });

    return res.send({
      data: {
        id: userdata.id,
        fullName: userdata.fullName,
        isAdmin: userdata.isAdmin,
        email: userdata.email,
        gender: userdata.gender,
        phone: userdata.phone,
        address: userdata.address,
        subscribe: userdata.subscribe,
        isLogin: true,
      },
    });
  } catch (error) {
    return res.send({ error });
  }
};

const { user } = require('../../models');

/* GET users listing. */
exports.reads = async (req, res) => {
  try {
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

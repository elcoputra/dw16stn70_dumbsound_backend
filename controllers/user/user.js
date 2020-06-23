const { user } = require('../../models');

/* GET users listing. */
exports.reads = async (req, res) => {
  try {
    const userdata = await user.findOne({
      where : {
        id: req.params.id
      }
    });
    return res.send({ data: userdata });
  } catch (error) {
    return res.send({error});
  }
};

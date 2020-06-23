require('dotenv').config();

const jwt = require('jsonwebtoken');

exports.getToken = async (req, res) => {
  try {
    // logic untuk nanti
    // kalo role admin dapet token admin, kalo user dapet token regular
    // atau
    // kalo admin dapet token, kalo user tidak dapat token

    const { email } = req.body;
    const idUser = req.credentialUser.id;
    const isAdmin = req.credentialUser.isAdmin;
    const token = jwt.sign({ id: idUser, isAdmin: isAdmin }, process.env.TOKEN_KEY);
    return res.send({
      data: [{ id: idUser, email, isAdmin, token }],
    });
  } catch (error) {
    return console.log(error);
  }
};

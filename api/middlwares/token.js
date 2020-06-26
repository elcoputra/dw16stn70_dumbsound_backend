require('dotenv').config();

const jwt = require('jsonwebtoken');

exports.getToken = async (req, res) => {
  try {
    const { email } = req.body;
    const idUser = req.credentialUser.id;
    const isAdmin = req.credentialUser.isAdmin;
    const isLogin = req.credentialUser.isLogin;
    const token = jwt.sign({ id: idUser, isAdmin: isAdmin, isLogin: isLogin }, process.env.TOKEN_KEY);
    return res.send({
      message: 'Login Success',
      data: [{ id: idUser, email, isAdmin, token }],
    });
  } catch (error) {
    return console.log(error);
  }
};

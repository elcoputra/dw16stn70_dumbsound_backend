const bcrypt = require('bcrypt');

const saltRounds = 10;

exports.encryptPass = async (req, res, next) => {
  try {
    const { password } = req.body;
    const encrypted = await bcrypt.hash(password, saltRounds);
    const registerRoute = { ...req.body, password: encrypted };
    req.body = registerRoute;
    return next();
  } catch (error) {
    return console.log(error);
  }
};

exports.decryptPass = async (req, res, next) => {
  try {
    const { password } = req.body;
    const decrypted = await bcrypt.compare(password, req.credentialUser.password);
    if (!decrypted) return res.status(400).send({ message: 'Invalid Login' });
    // res.send({ data: req.body });
    return next();
  } catch (error) {
    return console.log(error);
  }
};

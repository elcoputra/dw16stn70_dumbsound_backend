const { user } = require('../../models');
// const { encryptPass } = require ('../../api/middlwares/encryptor');

exports.create = async (req, res, next) => {
  try {
    const { fullName, email, password, isAdmin, gender, phone, address } = req.body;
    await user.create({
      fullName: fullName,
      email: email,
      password: password,
      isAdmin: false,
      gender: gender,
      phone: phone,
      address: address,
      subscribe: false,
    });
    const User = await user.findOne({
      where: { email },
    });
    if (!User) return res.status(400).send({ message: 'Invalid Registration' });
    req.credentialUser = User;
    return next();
  } catch (error) {
    return res.send({ error });
  }
};

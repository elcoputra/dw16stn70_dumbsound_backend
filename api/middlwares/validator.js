const Joi = require('@hapi/joi');
const { user, transaction, artist, song } = require('../../models');

// ### USER ### //
exports.validatingRegister = async (req, res, next) => {
  try {
    const schema = Joi.object({
      fullName: Joi.string().min(3).required(),
      email: Joi.string().email().required(),
      password: Joi.string().min(4).required(),
      isAdmin: Joi.boolean().allow(),
      gender: Joi.string().required(),
      phone: Joi.string().required(),
      address: Joi.string().required(),
      subscribe: Joi.boolean().allow(),
    });
    const { error } = await schema.validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });

    // if email exist
    const { email } = req.body;
    const User = await user.findOne({
      where: { email },
    });
    if (User) return res.status(400).send({ message: 'Email Exist!' });

    return next();
  } catch (error) {
    return console.log(error);
  }
};

exports.validatingLogin = async (req, res, next) => {
  try {
    const schema = Joi.object({
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    });
    const { error } = await schema.validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });
    return next();
  } catch (error) {
    return console.log(error);
  }
};

exports.validatingDeleteUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (id != parseInt(req.params.id, 10)) {
      return res.status(400).send({
        message: 'Something wrong with params id on your endpoint url',
      });
    }
    const detectUser = await user.findOne({
      where: { id: id },
    });
    if (!detectUser)
      return res.status(400).send({
        message: 'ID User Not Exist',
      });

    return next();
  } catch (error) {
    return console.log(error);
  }
};

// ### TRANSACTION ### //
exports.validatingAddTransaction = async (req, res, next) => {
  try {
    const schema = Joi.object({
      userId: Joi.number().required(),
      attachment: Joi.string().required(),
      status: Joi.string().valid('Approved', 'Pending', 'Denied').allow(),
      bankAccount: Joi.string().required(),
    });
    const { error } = await schema.validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });

    const { userId } = req.body;
    // validator untuk tidak memasukan transaksi lagi
    const UserId = await transaction.findOne({
      where: { userId },
    });
    if (UserId)
      return res.status(400).send({
        status: 'failed',
        error: 'You have already sent the upgrade data, check again later',
      });

    const idUser = await user.findOne({
      where: { id: userId },
    });
    if (!idUser)
      return res.status(400).send({
        status: 'failed',
        message: 'The user id you provided does not exist, please add a new user',
      });

    return next();
  } catch (error) {
    return console.log(error);
  }
};

exports.validatingUpdateTransaction = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
      return res.status(400).send({
        message: 'field cannot be empty',
      });
    }
    if (id != parseInt(req.params.id, 10)) {
      return res.status(400).send({
        message: 'Something wrong with params id on your endpoint url',
      });
    }
    const schema = Joi.object({
      startDate: Joi.date().allow(),
      dueDate: Joi.date().allow(),
      userId: Joi.number().allow(),
      attachment: Joi.string().allow(),
      status: Joi.string().valid('Approved', 'Pending', 'Denied').allow(),
    });
    const { error } = await schema.validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });

    const ID = await transaction.findOne({
      where: { id: id },
    });
    if (!ID)
      return res.status(400).send({
        message: 'id transaction not found',
      });

    const { userId } = req.body;
    if (userId) {
      const idUser = await user.findOne({
        where: { id: userId },
      });
      if (!idUser)
        return res.status(400).send({
          status: 'failed',
          message: 'The user id you provided does not exist, please add a new user',
        });
    }

    return next();
  } catch (error) {
    return console.log(error);
  }
};

exports.validatingDeleteTransaction = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (id != parseInt(req.params.id, 10)) {
      return res.status(400).send({
        message: 'Something wrong with params id on your endpoint url',
      });
    }
    const ID = await transaction.findOne({
      where: { id },
    });
    if (!ID)
      return res.status(400).send({
        message: 'id transaction not found',
      });

    return next();
  } catch (error) {
    return console.log(error);
  }
};

// ADD ARTIST

exports.validatingAddArtist = async (req, res, next) => {
  try {
    const schema = Joi.object({
      typeId: Joi.number().required(),
      name: Joi.string().required(),
      old: Joi.number().required(),
      startAcareer: Joi.number().required(),
      bio: Joi.string().max(1000).required(),
      pic: Joi.string().max(500).required(),
      cover: Joi.string().max(500).required(),
    });
    const { error } = await schema.validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });

    return next();
  } catch (error) {
    return console.log(error);
  }
};

// ADD SONG
exports.validatingAddSong = async (req, res, next) => {
  try {
    const schema = Joi.object({
      artistId: Joi.number().required(),
      title: Joi.string().required(),
      year: Joi.number().required(),
      musicLink: Joi.string().max(255).required(),
      thumbnailLink: Joi.string().max(255).required(),
    });
    const { error } = await schema.validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });

    return next();
  } catch (error) {
    return console.log(error);
  }
};

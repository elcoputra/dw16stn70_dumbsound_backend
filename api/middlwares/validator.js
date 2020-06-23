const Joi = require('@hapi/joi');
const { user, transaction, category, movie, episode } = require('../../models');

// ### USER ### //
exports.validatingRegister = async (req, res, next) => {
  try {
    const schema = Joi.object({
      fullName: Joi.string().min(2).required(),
      email: Joi.string().email().min(13).required(),
      password: Joi.string().min(8).max(16).required(),
      isAdmin: Joi.boolean().allow(),
      gender: Joi.string().required(),
      phone: Joi.string().min(10).required(),
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
      // startDate: Joi.string().allow(),
      // dueDate: Joi.string().min(8).allow(),
      userId: Joi.number().required(),
      attachment: Joi.string().required(),
      status: Joi.string().valid('Approved', 'Pending', 'Denied').allow(),
      bankAccount: Joi.string().required(),
    });
    const { error } = await schema.validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });

    const { userId } = req.body;
    // validator untuk tidak memasukan transaksi lagi, tapi karena transaksi boleh di masukan berkali2
    // feature ini di hapus
    const UserId = await transaction.findOne({
      where: { userId },
    });
    if (UserId)
      return res.status(400).send({
        status: 'failed',
        message: 'userId already has a data transaction, it must be edited rather than adding a new one',
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

// ### CATEGORY //
exports.validatingAddCategory = async (req, res, next) => {
  try {
    const schema = Joi.object({
      name: Joi.string().required(),
    });
    const { error } = await schema.validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });

    const { name } = req.body;
    const Name = await category.findOne({
      where: { name },
    });
    if (Name)
      return res.status(400).send({
        message: 'Category name already exist!',
      });

    return next();
  } catch (error) {
    return console.log(error);
  }
};

exports.validatingUpdateCategory = async (req, res, next) => {
  try {
    const id = req.params.id;
    if (id != parseInt(req.params.id, 10)) {
      return res.status(400).send({
        message: 'Something wrong with params id on your endpoint url',
      });
    }
    const schema = Joi.object({
      name: Joi.string().required(),
    });
    const { error } = await schema.validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });

    const idCategory = await category.findOne({
      where: { id: id },
    });
    if (!idCategory)
      return res.status(400).send({
        message: 'Category Not exist!',
      });

    return next();
  } catch (error) {
    return console.log(error);
  }
};

exports.validatingDeleteCategory = async (req, res, next) => {
  try {
    const id = req.params.id;
    if (id != parseInt(req.params.id, 10)) {
      return res.status(400).send({
        message: 'Something wrong with params id on your endpoint url',
      });
    }
    const idCategory = await category.findOne({
      where: { id: id },
    });
    if (!idCategory)
      return res.status(400).send({
        message: 'Category Not exist!',
      });

    return next();
  } catch (error) {
    return console.log(error);
  }
};

// ### MOVIE/FILM ### //
exports.validatingAddMovie = async (req, res, next) => {
  try {
    const schema = Joi.object({
      categoryId: Joi.number().required(),
      title: Joi.string().allow(),
      thumbnail: Joi.string().allow(),
      linkTrailer: Joi.string().allow(),
      thumbnailTrailer: Joi.string().allow(),
      year: Joi.allow(),
      description: Joi.string().allow(),
    });
    const { error } = await schema.validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });

    const { title } = req.body;
    const nameMovie = await movie.findOne({
      where: { title: title },
    });
    if (nameMovie)
      return res.status(400).send({
        message: 'Movie Title Already exist!',
      });
    const { categoryId } = req.body;
    const idCategory = await category.findOne({
      where: { id: categoryId },
    });
    if (!idCategory)
      return res.status(400).send({
        message: 'The category you provided does not exist',
      });

    return next();
  } catch (error) {
    return console.log(error);
  }
};

exports.validatingUpdateMovie = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (id != parseInt(id)) {
      return res.status(400).send({
        message: 'Something wrong with params id on your endpoint url',
      });
    }

    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
      return res.status(400).send({
        message: 'field cannot be empty',
      });
    }
    const schema = Joi.object({
      categoryId: Joi.number().allow(),
      title: Joi.string().allow(),
      thumbnail: Joi.string().allow(),
      linkTrailer: Joi.string().allow(),
      thumbnailTrailer: Joi.string().allow(),
      year: Joi.number().allow(),
      description: Joi.string().allow(),
    });
    const { error } = await schema.validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });

    const updateMovie = await movie.findOne({
      where: { id: id },
    });
    if (!updateMovie)
      return res.status(400).send({
        message: 'ID Movie Not Exist',
      });

    const { categoryId } = req.body;
    if (categoryId) {
      const updateMovie = await category.findOne({
        where: { id: categoryId },
      });
      if (!updateMovie)
        return res.status(400).send({
          message: 'ID Category Not Exist',
        });
    }

    return next();
  } catch (error) {
    return console.log(error);
  }
};

exports.validatingDeleteMovie = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (id != parseInt(req.params.id, 10)) {
      return res.status(400).send({
        message: 'Something wrong with params id on your endpoint url',
      });
    }
    const deleteMovie = await movie.findOne({
      where: { id: id },
    });
    if (!deleteMovie)
      return res.status(400).send({
        message: 'ID Movie Not Exist',
      });

    return next();
  } catch (error) {
    return console.log(error);
  }
};

// ### EPISODE ### //
exports.validatingViewEpisodes = async (req, res, next) => {
  try {
    const { movieId } = req.params;
    if (movieId != parseInt(req.params.movieId, 10)) {
      return res.status(400).send({
        message: 'Something wrong with params id on your endpoint url',
      });
    }
    return next();
  } catch (error) {
    return console.log(error);
  }
};

exports.validatingViewEpisodesByCategory = async (req, res, next) => {
  try {
    if (req.params.categoryId != parseInt(req.params.categoryId)) {
      return res.status(400).send({
        message: 'Something wrong with params categoryId on your endpoint url',
      });
    }
    const moviesByCategory = await movie.findOne({
      where: {
        categoryId: req.params.categoryId,
      },
    });
    if (!moviesByCategory)
      return await res.status(400).send({
        message: 'Category not found, check your endpoint again',
      });
    return next();
  } catch (error) {
    return console.log(error);
  }
};

exports.validatingViewEpisode = async (req, res, next) => {
  try {
    if (req.params.movieId != parseInt(req.params.movieId)) {
      return res.status(400).send({
        message: 'Something wrong with params id on your endpoint url',
      });
    }
    if (req.params.id != parseInt(req.params.id)) {
      return res.status(400).send({
        message: 'Something wrong with params id on your endpoint url',
      });
    }
    return next();
  } catch (error) {
    return console.log(error);
  }
};

exports.validatingAddEpisodes = async (req, res, next) => {
  try {
    const schema = Joi.object({
      title: Joi.string().required(),
      thumbnailEpisode: Joi.string().allow(),
      linkEpisode: Joi.string().allow(),
      movieId: Joi.number().required(),
    });
    const { error } = await schema.validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });

    const { title } = req.body;
    const nameEpisode = await episode.findOne({
      where: { title: title },
    });
    if (nameEpisode)
      return res.status(400).send({
        message: 'Episode Title Already exist!',
      });

    const { movieId } = req.body;
    const idMovie = await movie.findOne({
      where: { id: movieId },
    });
    if (!idMovie)
      return res.status(400).send({
        message: 'The Movie you provided does not exist',
      });

    return next();
  } catch (error) {
    return console.log(error);
  }
};

exports.validatingUpdateEpisode = async (req, res, next) => {
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
      movieId: Joi.number().allow(),
      title: Joi.string().min(2).allow(),
      linkEpisode: Joi.string().allow(),
      thumbnailEpisode: Joi.string().allow(),
    });
    const { error } = await schema.validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });
    // validating episode id
    const updateEpisode = await episode.findOne({
      where: { id: id },
    });
    if (!updateEpisode)
      return res.status(400).send({
        message: 'ID Episode Not Exist',
      });
    // validating movie id
    const { movieId } = req.body;
    const findMovie = await movie.findOne({
      where: { id: movieId },
    });
    if (!findMovie)
      return res.status(400).send({
        message: 'ID Movie Not Exist',
      });

    return next();
  } catch (error) {
    return console.log(error);
  }
};

exports.validatingDeleteEpisode = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (id != parseInt(req.params.id, 10)) {
      return res.status(400).send({
        message: 'Something wrong with params id on your endpoint url',
      });
    }
    const deleteEpisode = await episode.findOne({
      where: { id: id },
    });
    if (!deleteEpisode)
      return res.status(400).send({
        message: 'ID episode not exist',
      });

    return next();
  } catch (error) {
    return console.log(error);
  }
};

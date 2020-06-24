/* eslint-disable */
const jwt = require('jsonwebtoken');

exports.authenticatingUser = async (req, res, next) => {
  let header;
  let token;

  if (!(header = req.header('Authorization')) || !(token = header.replace('Bearer ', '')))
    return res.status(401).send({ message: 'Access denied!' });

  try {
    const verified = jwt.verify(token, process.env.TOKEN_KEY);
    req.user = verified;
    return next();
  } catch (error) {
    return res.status(400).send({ message: 'Invalid token' });
  }
};
exports.authenticatingById = async (req, res, next) => {
  let header;
  let token;

  if (!(header = req.header('Authorization')) || !(token = header.replace('Bearer ', '')))
    return res.status(401).send({ message: 'Access denied!' });

  try {
    const verified = jwt.verify(token, process.env.TOKEN_KEY);
    if (verified.isAdmin === true) {
      req.user = verified;
      return next();
    }
    if (verified.isAdmin === false) {
      if (verified.id == req.params.id) {
        req.user = verified;
        return next();
      } else {
        return res.status(401).send({ message: 'Access denied!' });
      }
    }
  } catch (error) {
    return res.status(401).send(error);
  }
};
exports.authenticatingAdmin = (req, res, next) => {
  let header;
  let token;

  if (!(header = req.header('Authorization')) || !(token = header.replace('Bearer ', '')))
    return res.status(401).send({ message: 'Access denied!' });

  try {
    const verified = jwt.verify(token, process.env.TOKEN_KEY);
    if (verified.isAdmin === true) {
      req.user = verified;
      return next();
    } else {
      return res.status(401).send({ message: 'Access denied!' });
    }
  } catch (error) {
    return res.status(400).send(error);
  }
};

exports.decode = (req, res, next) => {
  let header;
  let token;
  header = req.header('Authorization');
  token = header.replace('Bearer ', '');
  // if (!(header = req.header('Authorization')) || !(token = header.replace('Bearer ', ''))) return res.send({ isLogin: false });
  try {
    const verified = jwt.verify(token, process.env.TOKEN_KEY);
    req.decode = verified;
    return next();
  } catch (error) {
    return res.send({ data: { isLogin: false } });
  }
};

import jwt from 'jsonwebtoken';

import config from '../config';

export const newToken = user =>
  jwt.sign({ id: user._id }, config.secrets.jwt, {
    expiresIn: config.secrets.jwtExp,
  });

export const verifyToken = async token => {
  try {
    return jwt.verify(token, config.secrets.jwt);
  } catch (err) {
    throw err;
  }
};

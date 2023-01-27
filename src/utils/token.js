require('dotenv');
const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET || 'algumaCoisa';

const jwtConfig = { expiresIn: '7d', algorithm: 'HS256' };

const tokenGenerate = (body) => jwt.sign(body, secret, jwtConfig);
const validateToken = (token) => jwt.verify(token, secret);

module.exports = {
  tokenGenerate,
  validateToken,
};

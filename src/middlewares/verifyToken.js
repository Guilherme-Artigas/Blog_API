const { validateToken } = require('../utils/token');

const verifyToken = (req, res, next) => {
  try {
    const { authorization } = req.headers;
    if (!authorization) return res.status(401).json({ message: 'Token not found' });
    validateToken(authorization);
  } catch (e) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
  next();
};

module.exports = {
  verifyToken,
};

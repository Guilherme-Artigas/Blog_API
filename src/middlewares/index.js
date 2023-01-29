const { validUser } = require('./validateUserRegistration');
const { authrizeUser } = require('./verifyUser');
const { verifyToken } = require('./verifyToken');
const { validateNewPosts } = require('./validateNewPosts');

module.exports = {
  validUser,
  authrizeUser,
  verifyToken,
  validateNewPosts,
};

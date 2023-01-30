const { validUser } = require('./validateUserRegistration');
const { authrizeUser } = require('./verifyUser');
const { verifyToken } = require('./verifyToken');
const { validateNewPosts } = require('./validateNewPosts');
const { authorizeModifications } = require('./validateUpPosts');
const { authorizeDeletions } = require('./authDeletions');

module.exports = {
  validUser,
  authrizeUser,
  verifyToken,
  validateNewPosts,
  authorizeModifications,
  authorizeDeletions,
};

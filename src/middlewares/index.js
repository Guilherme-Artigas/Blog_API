const { validUser } = require('./validateUserRegistration');
const { authrizeUser } = require('./verifyUser');

module.exports = {
  validUser,
  authrizeUser,
};

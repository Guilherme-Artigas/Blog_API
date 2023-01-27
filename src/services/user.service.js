const { User: UserModel } = require('../models');
const { tokenGenerate } = require('../utils/tokenGenerate');

const registerUser = async (body) => {
  const verifyEmail = await UserModel.findOne({ where: { email: body.email } });
  if (verifyEmail !== null) return { status: 409, message: 'User already registered' };
  await UserModel.create(body);
  const message = tokenGenerate(body);
  return { message };
};

module.exports = {
  registerUser,
};

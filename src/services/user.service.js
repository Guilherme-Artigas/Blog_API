const { User: UserModel } = require('../models');
const { tokenGenerate } = require('../utils/token');

const getAllUsers = async () => {
  const listUsers = await UserModel.findAll({
    attributes: ['id', 'displayName', 'email', 'image'],
  });
  return listUsers;
};

const registerUser = async (body) => {
  const verifyEmail = await UserModel.findOne({ where: { email: body.email } });
  if (verifyEmail !== null) return { status: 409, message: 'User already registered' };
  await UserModel.create(body);
  const message = tokenGenerate(body);
  return { message };
};

module.exports = {
  getAllUsers,
  registerUser,
};

const { User: UserModel } = require('../models');
const { tokenGenerate } = require('../utils/token');

const getAllUsers = async () => {
  const listUsers = await UserModel.findAll({
    attributes: { exclude: ['password'] },
  });
  return listUsers;
};

const getOneUserById = async (id) => {
 const userUnique = await UserModel.findOne({
  attributes: { exclude: ['password'] },
  where: { id },
 });
 return userUnique;
};

const getUserByEmail = async (email) => {
  const userUnique = await UserModel.findOne({
    where: { email },
    attributes: { exclude: ['password'] },
  });
  return userUnique;
};

const registerUser = async (body) => {
  const verifyEmail = await UserModel.findOne({ where: { email: body.email } });
  if (verifyEmail !== null) return { status: 409, message: 'User already registered' };
  const { id, displayName, email, image } = await UserModel.create(body);
  const message = tokenGenerate({ id, displayName, email, image });
  return { message };
};

module.exports = {
  getAllUsers,
  getOneUserById,
  getUserByEmail,
  registerUser,
};

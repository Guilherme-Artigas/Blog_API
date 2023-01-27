const { User: UserModel } = require('../models');
const { tokenGenerate } = require('../utils/tokenGenerate');

const getAllUsers = async () => {
  const listUsers = await UserModel.findAll();
  return listUsers;
};

const getByEmailAndPassword = async ({ email, password }) => {
  const userFound = await UserModel.findOne({ where: { email, password } });
  return userFound;
};

const authentication = async (body) => {
  const token = tokenGenerate(body);
  return { token };
};

module.exports = {
  getAllUsers,
  getByEmailAndPassword,
  authentication,
};

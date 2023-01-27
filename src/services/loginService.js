const { User: UserModel } = require('../models');
const { tokenGenerate } = require('../utils/token');

const getByEmailAndPassword = async ({ email, password }) => {
  const userFound = await UserModel.findOne({ where: { email, password } });
  return userFound;
};

const authentication = async (body) => {
  const token = tokenGenerate(body);
  return { token };
};

module.exports = {
  getByEmailAndPassword,
  authentication,
};

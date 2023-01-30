const { User: UserModel } = require('../models');
const { tokenGenerate } = require('../utils/token');

const getByEmailAndPassword = async ({ email, password }) => {
  const userFound = await UserModel.findOne({ where: { email, password } });
  return userFound;
};

const authentication = async ({ email, password }) => {
  const { id, displayName, image } = await UserModel.findOne({
    where: { email, password },
    attributes: { exclude: ['password'] },
  });
  const token = tokenGenerate({ id, displayName, email, image });
  return { token };
};

module.exports = {
  getByEmailAndPassword,
  authentication,
};

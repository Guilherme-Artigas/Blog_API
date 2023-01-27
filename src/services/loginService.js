// const { User: UserModel } = require('../models');

// const getAllUsers = async () => {
//   const listUsers = await UserModel.findAll();
//   return listUsers;
// };

// const getByEmailAndPassword = async ({ email, password }) => {
//   const userFound = await UserModel.findOne({ where: { email, password } });
//   return userFound;
// };

// const createNewUser = async (body) => {
//   await UserModel.create(body);
//   return { message: 'oi' };
// };

module.exports = {
  // getAllUsers,
  // getByEmailAndPassword,
  // createNewUser,
};

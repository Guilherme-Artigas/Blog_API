const { userService } = require('../services');

const getAllUsers = async (_req, res) => {
  try {
    const listAllUsers = await userService.getAllUsers();
    return res.status(200).json(listAllUsers);
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: e.message });
  }
};

const getOneUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const foundUser = await userService.getOneUserById(id);
    if (!foundUser) return res.status(404).json({ message: 'User does not exist' });
    return res.status(200).json(foundUser);
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: e.message });
  }
};

const registerUser = async (req, res) => {
  try {
    const { body } = req;
    const { status, message } = await userService.registerUser(body);
    if (status) return res.status(status).json({ message });
    return res.status(201).json({ token: message });
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: e.message });
  }
};

const deleteMe = async (req, res) => {
  try {
    const { headers: { authorization } } = req;
    await userService.deleteMe(authorization);
    return res.status(204).json();
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: 'Houve erro ao deletar-se :(' });
  }
};

module.exports = {
  getAllUsers,
  getOneUserById,
  registerUser,
  deleteMe,
};

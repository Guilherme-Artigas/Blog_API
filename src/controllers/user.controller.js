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

module.exports = {
  getAllUsers,
  registerUser,
};

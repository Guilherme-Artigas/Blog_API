const { loginService } = require('../services');

const createNewUser = async (req, res) => {
  try {
    const { body } = req;
    const { message } = await loginService.createNewUser(body);
    return res.status(200).json(message);
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: e.message });
  }
};

module.exports = {
  createNewUser,
};

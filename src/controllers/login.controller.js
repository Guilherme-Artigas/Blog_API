const { loginService } = require('../services');

const authentication = async (req, res) => {
  try {
    const { body } = req;
    const { token } = await loginService.authentication(body);
    return res.status(200).json({ token });
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: e.message });
  }
};

module.exports = {
  authentication,
};

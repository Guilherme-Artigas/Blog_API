const { loginService } = require('../services');

const validateUser = async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }
  const user = await loginService.getByEmailAndPassword(req.body);
  if (!user) return res.status(400).json({ message: 'Invalid fields' });
  next();
};

module.exports = {
  validateUser,
};

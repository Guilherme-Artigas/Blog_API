const Joi = require('joi');
const { loginService } = require('../services');

const bodyUser = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

const authrizeUser = async (req, res, next) => {
  const { body } = req;
  const { error } = bodyUser.validate(body);
  if (error) return res.status(400).json({ message: 'Some required fields are missing' });
  const user = await loginService.getByEmailAndPassword(req.body);
  if (!user) return res.status(400).json({ message: 'Invalid fields' });
  next();
};

module.exports = {
  authrizeUser,
};

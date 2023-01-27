const Joi = require('joi');

const bodyUser = Joi.object({
  displayName: Joi.string().min(8).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  image: Joi.string(),
});

const validUser = (req, res, next) => {
  const { body } = req;
  const { error } = bodyUser.validate(body);
  if (error) return res.status(400).json({ message: error.message });
  next();
};

module.exports = {
  validUser,
};

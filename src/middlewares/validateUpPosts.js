const Joi = require('joi');

const { validateToken } = require('../utils/token');

const { postsService } = require('../services');

const post = Joi.object({
  title: Joi.string().min(1).required(),
  content: Joi.string().min(1).required(),
});

const validateUpPosts = async (req, res, next) => {
  const { body, headers: { authorization }, params: { id } } = req;
  const { error } = post.validate(body);
  if (error) return res.status(400).json({ message: 'Some required fields are missing' });
  const postFound = await postsService.getPostById(id);
  if (!postFound) return res.status(400).json({ message: 'Post not found' });
  const user = await validateToken(authorization);
  if (user.id !== postFound.userId) return res.status(401).json({ message: 'Unauthorized user' });
  next();
};

module.exports = {
  validateUpPosts,
};

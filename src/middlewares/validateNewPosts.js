const Joi = require('joi');

const { getAllCategories } = require('../services/categorie.service');

const post = Joi.object({
  title: Joi.string().min(1).required(),
  content: Joi.string().min(1).required(),
  categoryIds: Joi.array().required(),
});

const validateNewPosts = async (req, res, next) => {
  const { body } = req;
  const { error } = post.validate(body);
  if (error) return res.status(400).json({ message: 'Some required fields are missing' });
  const listCategories = await getAllCategories();
  let catDoesNotExist;
  body.categoryIds.forEach((_c, i) => {
    if (!listCategories.some((ca) => ca.id === body.categoryIds[i])) {
      catDoesNotExist = true;
    }
  });
  if (catDoesNotExist) {
    return res.status(400).json({ message: 'one or more "categoryIds" not found' });
  }
  next();
};

module.exports = {
  validateNewPosts,
};

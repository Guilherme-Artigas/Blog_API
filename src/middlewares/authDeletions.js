const { validateToken } = require('../utils/token');

const { postsService } = require('../services');

const authorizeDeletions = async (req, res, next) => {
  const { headers: { authorization }, params: { id } } = req;
  const postFound = await postsService.getPostById(id);
  if (!postFound) return res.status(404).json({ message: 'Post does not exist' });
  const user = await validateToken(authorization);
  if (user.id !== postFound.userId) return res.status(401).json({ message: 'Unauthorized user' });
  next();
};

module.exports = {
  authorizeDeletions,
};
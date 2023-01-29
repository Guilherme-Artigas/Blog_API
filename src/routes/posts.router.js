const { Router } = require('express');
const { verifyToken, validateNewPosts } = require('../middlewares');

const { postsController } = require('../controllers');

const router = Router();

router.get(
  '/',
  verifyToken,
  postsController.getAllPosts,
);

router.get(
  '/:id',
  verifyToken,
  postsController.getPostById,
);

router.post(
  '/',
  verifyToken,
  validateNewPosts,
  postsController.createNewPost,
);

module.exports = router;

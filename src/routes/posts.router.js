const { Router } = require('express');
const { verifyToken, validateNewPosts } = require('../middlewares');

const { postsController } = require('../controllers');

const router = Router();

router.post(
  '/',
  verifyToken,
  validateNewPosts,
  postsController.createNewPost,
);

module.exports = router;

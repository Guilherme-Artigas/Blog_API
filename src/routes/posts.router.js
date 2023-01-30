const { Router } = require('express');
const {
  verifyToken,
  validateNewPosts,
  authorizeModifications,
  authorizeDeletions,
} = require('../middlewares');

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

router.put(
  '/:id',
  verifyToken,
  authorizeModifications,
  postsController.updatePosts,
);

router.delete(
  '/:id',
  verifyToken,
  authorizeDeletions,
  postsController.deletePost,
);

module.exports = router;

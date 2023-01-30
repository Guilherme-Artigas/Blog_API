const { Router } = require('express');
const { validUser, verifyToken } = require('../middlewares');

const { userController } = require('../controllers');

const router = Router();

router.get(
  '/',
  verifyToken,
  userController.getAllUsers,
);

router.get(
  '/:id',
  verifyToken,
  userController.getOneUserById,
);

router.post(
  '/',
  validUser,
  userController.registerUser,
);

router.delete(
  '/me',
  verifyToken,
  userController.deleteMe,
);

module.exports = router;

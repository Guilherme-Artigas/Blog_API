const { Router } = require('express');

const { validUser, verifyToken } = require('../middlewares');

const { userController } = require('../controllers');

const router = Router();

router.get(
  '/',
  verifyToken,
  userController.getAllUsers,
);

router.post(
  '/',
  validUser,
  userController.registerUser,
);

module.exports = router;

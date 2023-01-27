const { Router } = require('express');

const { validUser } = require('../middlewares');

const { userController } = require('../controllers');

const router = Router();

router.post(
  '/',
  validUser,
  userController.registerUser,
);

module.exports = router;

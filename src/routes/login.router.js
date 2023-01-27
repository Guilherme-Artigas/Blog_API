const { Router } = require('express');
const { authrizeUser } = require('../middlewares');

const { loginController } = require('../controllers');

const router = Router();

router.post(
  '/',
  authrizeUser,
  loginController.authentication,
);

module.exports = router;

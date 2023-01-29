const { Router } = require('express');
const { verifyToken } = require('../middlewares/verifyToken');

const { categoriesController } = require('../controllers');

const router = Router();

router.get(
  '/',
  verifyToken,
  categoriesController.getAllCategories,
);

router.post(
  '/',
  verifyToken,
  categoriesController.createCategorie,
);

module.exports = router;

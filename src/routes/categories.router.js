const { Router } = require('express');

const { categoriesController } = require('../controllers');
const { verifyToken } = require('../middlewares/verifyToken');

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

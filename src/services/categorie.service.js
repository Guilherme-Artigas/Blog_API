const { Category: CatModel } = require('../models');

const getAllCategories = async () => {
  const listCategories = await CatModel.findAll();
  return listCategories;
};

const createCategorie = async (name) => {
 const newCategorie = await CatModel.create({ name });
 return newCategorie;
};

module.exports = {
  getAllCategories,
  createCategorie,
};

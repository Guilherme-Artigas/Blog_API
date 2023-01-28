const { Category: CatModel } = require('../models');

const createCategorie = async (name) => {
 const newCategorie = await CatModel.create({ name });
 return newCategorie;
};

module.exports = {
  createCategorie,
};

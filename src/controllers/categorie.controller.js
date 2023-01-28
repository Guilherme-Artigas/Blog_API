const { categorieService } = require('../services');

const getAllCategories = async (_req, res) => {
  try {
    const listCategories = await categorieService.getAllCategories();
    return res.status(200).json(listCategories);
  } catch (e) {
    console.log(e);
    return res.status(500).json(
      { message: 'Erro ao tentar recuperar a lista de todas as categorias' },
    );
  }
};

const createCategorie = async (req, res) => {
  try {
    const { name } = req.body;
    if (typeof name !== 'string' || name.length < 3) {
      return res.status(400).json({ message: '"name" is required' });
    }
    const newCategorie = await categorieService.createCategorie(name);
    return res.status(201).json(newCategorie);
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: 'Erro ao cadastrar uma nova categoria' });
  }
};

module.exports = {
  getAllCategories,
  createCategorie,
};

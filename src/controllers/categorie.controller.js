const { categorieService } = require('../services');

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
  createCategorie,
};

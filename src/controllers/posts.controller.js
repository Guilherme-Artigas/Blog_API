const { postsService } = require('../services');
const { userService } = require('../services');
const { postCategoryService } = require('../services');
const { validateToken } = require('../utils/token');

const getAllPosts = async (req, res) => {
  try {
    const listPosts = await postsService.getAllPosts();
    return res.status(200).json(listPosts);
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: 'Erro ao recuperar a lista de todos os posts' });
  }
};

const getPostById = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await postsService.getPostById(id);
    if (!post) return res.status(404).json({ message: 'Post does not exist' });
    return res.status(200).json(post);
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: 'Erro ao recuperar o post pelo ID' });
  }
};

const createNewPost = async (req, res) => {
  try {
    const { body } = req;
    const { authorization } = req.headers;
    const { email } = await validateToken(authorization);
    const { id } = await userService.getUserByEmail(email);
    const newPost = await postsService.createNewPost({ userId: id, ...body });
    await postCategoryService.newPostCategory({ postId: newPost.id, categoryId: body.categoryIds });
    return res.status(201).json(newPost);
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: 'Houve algum erro ao tentar cadastrar um novo post' });
  }
};

const updatePosts = async (req, res) => {
  try {
    const { body, params: { id } } = req;
    const { updatedPost } = await postsService.updatePosts(body, id);
    return res.status(200).json(updatedPost);
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: 'Houve algum na hora de atualizar postagens' });
  }
};

module.exports = {
  getAllPosts,
  getPostById,
  createNewPost,
  updatePosts,
};

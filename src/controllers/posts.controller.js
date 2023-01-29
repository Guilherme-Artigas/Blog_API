const { postsService } = require('../services');
const { userService } = require('../services');
const { postCategoryService } = require('../services');
const { validateToken } = require('../utils/token');

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

module.exports = {
  createNewPost,
};

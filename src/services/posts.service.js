const { Op } = require('sequelize');
const { BlogPost, User, Category } = require('../models');
const { validateToken } = require('../utils/token');

const getAllPosts = async () => {
  const listAllPosts = await BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories' },
    ],
  });
  return listAllPosts;
};

const getPostById = async (id) => {
  const post = await BlogPost.findOne({
    where: { id },
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories' },
    ],
  });
  return post;
};

// include: [
//   { model: User, as: 'user', attributes: { exclude: ['password'] } },
//   { model: Category, as: 'categories' }],
// where: {
//   [Op.or]: [{ title: { [Op.like]: `%${word}%` } }, { content: { [Op.like]: `%${word}%` } }],
// },

const getPostByTerm = async (auth, word) => {
  const { id } = await validateToken(auth);
  const posts = await BlogPost.findAll({
    where: {
      userId: id,
      [Op.or]: [{ title: { [Op.like]: `%${word}%` } }, { content: { [Op.like]: `%${word}%` } }],
    },
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories' },
    ],
  });
  return posts;
};

const createNewPost = async (body) => {
  const newPost = await BlogPost.create(body);
  return newPost;
};

const updatePosts = async (body, id) => {
  await BlogPost.update(
    {
      title: body.title,
      content: body.content,
    },
    { where: { id } },
  );
  const updatedPost = await getPostById(id);
  return { updatedPost };
};

const deletePost = async (id) => {
  await BlogPost.destroy({ where: { id } });
};

module.exports = {
  getAllPosts,
  getPostById,
  getPostByTerm,
  createNewPost,
  updatePosts,
  deletePost,
};

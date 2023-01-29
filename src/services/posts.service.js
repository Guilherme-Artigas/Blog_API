const { BlogPost, User, Category } = require('../models');

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

const createNewPost = async (body) => {
  const newPost = await BlogPost.create(body);
  return newPost;
};

module.exports = {
  getAllPosts,
  getPostById,
  createNewPost,
};

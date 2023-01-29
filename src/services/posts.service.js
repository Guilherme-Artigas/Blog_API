const { BlogPost } = require('../models');

const createNewPost = async (body) => {
  const newPost = await BlogPost.create(body);
  return newPost;
};

module.exports = {
  createNewPost,
};

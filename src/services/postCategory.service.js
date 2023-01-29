const { PostCategory: PCModel } = require('../models');

const newPostCategory = async (n) => {
  n.categoryId.forEach((i) => PCModel.bulkCreate(
    [{ postId: n.postId, categoryId: i }],
  ));
};

module.exports = {
  newPostCategory,
};

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.createTable(
    'posts_categories',
    {
      postId: {
        primaryKey: true,
        field: 'post_id',
        type: Sequelize.INTEGER,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
          model: 'blog_posts',
          key: 'id',
        },
      },
      categoryId: {
        primaryKey: true,
        field: 'category_id',
        type: Sequelize.INTEGER,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
          model: 'categories',
          key: 'id',
        },
      },
    },
  ),
  down: async (queryInterface, _Sequelize) => queryInterface.dropTable('post_categories'),
};

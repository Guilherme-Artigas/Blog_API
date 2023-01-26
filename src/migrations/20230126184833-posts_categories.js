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
        // references: {
        //   model: '',
        //   key: '',
        // },
      },
      categoryId: {
        primaryKey: true,
        field: 'category_id',
        type: Sequelize.INTEGER,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        // references: {
        //   model: '',
        //   key: '',
        // },
      },
    },
  ),
  down: async (queryInterface, _Sequelize) => queryInterface.dropTable('post_categories'),
};

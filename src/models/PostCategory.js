module.exports = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define(
    'PostCategory',
    {
      postId: {
        allowNull: false,
        primaryKey: true,
        field: 'post_id',
        type: DataTypes.INTEGER,
      },
      categoryId: {
        allowNull: false,
        primaryKey: true,
        field: 'category_id',
        type: DataTypes.INTEGER,
      }
    },
    {
      timestamps: false,
      tableName: 'posts_categories',
      underscored: true,
    }
  );

  PostCategory.associate = (models) => {
    models.Category.belongsToMany(
      models.BlogPost,
      {
        as: 'blogposts',
        through: PostCategory,
        foreignKey: 'postId',
        otherKey: 'categoryId',
      },
    );

    models.BlogPost.belongsToMany(
      models.Category,
      {
        as: 'categories',
        through: PostCategory,
        foreignKey: 'categoryId',
        otherKey: 'postId',
      }
    )
  };

  return PostCategory;
};

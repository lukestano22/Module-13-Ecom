const sequelize = require('../config/connection.js');

const { Model, DataTypes } = require('sequelize');

class Category extends Model {}

Category.init(
  {
    category_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    }
  },
  {
    underscored: true,
    sequelize,
    timestamps: false,
    modelName: 'category',
    freezeTableName: true,
  }
);

module.exports = Category;

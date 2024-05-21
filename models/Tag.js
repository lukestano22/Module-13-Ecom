const { Model, DataTypes } = require('sequelize');
const db = require('../config/db');

class Tag extends Model {}

Tag.init(
  {
    tag_name: { 
      type: DataTypes.STRING,
    },
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    }
  },
  {
    sequelize: db,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

module.exports = Tag;

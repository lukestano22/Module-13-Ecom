// Import models
const Product = require('./Product');
const Tag = require('./Tag');
const Category = require('./Category');
const ProductTag = require('./ProductTag');

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  foreignKey: 'product_id',
  through: ProductTag
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  foreignKey: 'tag_id',
  through: ProductTag
});

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id'
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id'
});

module.exports = {
  Tag,
  Product,
  Category,
  ProductTag
};

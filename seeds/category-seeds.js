const { Category } = require('../models');
  
const seedCategories = () => Category.bulkCreate(categoryData);

const categoryData = [
    {
      category_name: 'Shirts',
    },
    {
      category_name: 'Shoes',
    },
    {
      category_name: 'Hats',
    },
    {
      category_name: 'Music',
    },
    {
      category_name: 'Shorts',
    },
  ];
  
  module.exports = seedCategories;
  
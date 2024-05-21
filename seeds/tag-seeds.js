const { Tag } = require('../models');
  
const seedTags = () => Tag.bulkCreate(tagData);

const tagData = [
    {
      tag_name: 'rock music',
    },
    {
      tag_name: 'pop culture',
    },
    {
      tag_name: 'blue',
    },
    {
      tag_name: 'gold',
    },
    {
      tag_name: 'red',
    },
    {
      tag_name: 'white',
    },
    {
      tag_name: 'green',
    },
    {
      tag_name: 'pop music',
    },
  ];
  
  module.exports = seedTags;
  
const { Category } = require('../../models/category');

const create = async ({
  name,
  description,
}) => {
  const category = await Category.create({
    name,
    description,
  });
  return category;
};

module.exports = { create };
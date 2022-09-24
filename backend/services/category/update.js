const { Category } = require('../../models/category');

const updateById = async (categoryId, props) => {
  const category = await Category.findById(categoryId);

  for (const property in props) {
    category[property] = props[property];
  }

  await category.save();

  return category;
};
  
module.exports = { updateById };
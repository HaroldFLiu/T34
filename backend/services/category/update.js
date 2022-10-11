const { Category } = require('../../models/category');

const updateById = async (categoryId, props) => {
  const category = await Category.findById(categoryId);

  if (!category) {
    console.log(`Cannot find category with ID: ${categoryId}`);
    return undefined;
  }

  for (const property in props) {
    category[property] = props[property];
  }

  await category.save();

  return category;
};
  
module.exports = { updateById };
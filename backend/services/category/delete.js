const { Category } = require('../../models/category');

const deleteById = async (categoryId) => {
  //const category = await Category.findById(categoryId);
  //await cloudinary.uploader.destroy(category.cloudinary_id);

  const deletedItem = await Category.findByIdAndDelete(categoryId);
  return deletedItem;
};

module.exports = { deleteById };
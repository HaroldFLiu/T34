const { Category } = require('../../models/category');

const deleteById = async (categoryId) => {
  //const category = await Category.findById(categoryId);
  //await cloudinary.uploader.destroy(category.cloudinary_id);

  const deletedCategory = await Category.findByIdAndDelete(categoryId);
  console.log(`Deleted category by ID: ${categoryId}, Category: ${JSON.stringify(deletedCategory)}`);
  return deletedItem;
};

module.exports = { deleteById };
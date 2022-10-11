const { Category } = require('../../models/category');

const { isNilOrEmpty } = require('ramda-adjunct');
const { isMongoId } = require('validator');

const readById = async (categoryId) => {
  if (!isMongoId(`${categoryId}`)) {
    console.log(`Category ID: ${categoryId} is not a valid MongoID`);
    return undefined;
  }
  const category = await Category.findById(categoryId);

  if (isNilOrEmpty(category)) {
    console.log(`Cannot find category with id: ${categoryId}`);
  }

  return category;
};

const readAll = async () => {
  return Category.find();
};


module.exports = { readById, readAll };
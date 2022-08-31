const { isNilOrEmpty } = require('ramda-adjunct');
const { isMongoId } = require('validator');
const { Item } = require('../../models/item');

const readById = async (itemId) => {
  if (!isMongoId(`${itemId}`)) {
    return undefined;
  }
  const item = await Item.findById(itemId);

  return item;
};

const readByCategory = async (firstName) => {

};

const readAll = async () => {
  return Item.find();
};


module.exports = { readById, readAll };
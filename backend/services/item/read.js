const { Item } = require('../../models/item');

const readById = async (itemId) => {
  const item = await Item.findById(itemId);

  return item;
};

const readByCategory = async () => {

};

const readAll = async () => {
  return Item.find();
};


module.exports = { readById, readByCategory, readAll };
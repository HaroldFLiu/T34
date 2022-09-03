const { Item } = require('../../models/item');

const { isNilOrEmpty } = require('ramda-adjunct');
const { isMongoId } = require('validator');

const readById = async (itemId) => {
  if (!isMongoId(`${itemId}`)) {
    return undefined;
  }
  const item = await Item.findById(itemId);

  if (isNilOrEmpty(item)) {
    console.log(`Cannot find item with id: ${itemId}`);
  }

  return item;
};

const readByCategory = async (categoryId) => {
  const items = await Item.find();
  const filtered = items.filter((x) => x.category_ids.includes(categoryId));
  
  return filtered;
};

const readByPriceAsc = async () => {
  const items = await Item.find().sort({ price: 'asc' });

  return items;
}

const readByPriceDesc = async () => {
  const items = await Item.find().sort({ price: 'desc' });

  return items;
}

const readAll = async () => {
  return Item.find();
};


module.exports = { readById, readByCategory, readByPriceAsc, readByPriceDesc, readAll };
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

const readByCategory = async (categoryId, items) => {
  const filtered = items.filter((x) => x.category_ids.includes(categoryId));
  
  return filtered;
};

const readByPriceAsc = async (items) => {
  const filtered = items.sort({ price: 'asc' });

  return filtered;
}

const readByPriceDesc = async (items) => {
  const filtered = items.sort({ price: 'desc' });

  return filtered;
}

const readAll = async () => {
  return Item.find();
};

const readPublicItems = async() => {
  const items = await Item.find();
  const filtered = items.filter((x) => x.public_visibility == true);

  return filtered;
}

const readByGroup = async (groupId) => {
  const items = await Item.find();
  const filtered = items.filter((x) => x.group_ids.includes(groupId));
  
  return filtered;
};

const readItemsBySeller = async (sellerId) => {
  const items = await Item.find();
  const filtered = items.filter((x) => x.seller_id == sellerId);

  return filtered;
}

module.exports = { readById, readByCategory, readByPriceAsc, readByPriceDesc, 
  readAll, readPublicItems, readByGroup, readItemsBySeller };
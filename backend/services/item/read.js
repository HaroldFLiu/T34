const { Item } = require('../../models/item');

const { isNilOrEmpty } = require('ramda-adjunct');
const { isMongoId } = require('validator');

const readById = async (itemId) => {
  if (!isMongoId(`${itemId}`)) {
    console.log(`Item ID: ${itemId} is not a valid MongoID`);
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

  if (!filtered) {
    console.log(`No public items`);
  }

  return filtered;
}

const readByGroup = async (groupId) => {
  const items = await Item.find();
  const filtered = items.filter((x) => x.group_ids.includes(groupId));

  if (!filtered) {
    console.log(`No items belonging to group with ID: ${groupId}`);
  }
  
  return filtered;
};

const readItemsBySeller = async (sellerId) => {
  const items = await Item.find();
  const filtered = items.filter((x) => x.seller_id.toString() == sellerId.toString());

  if (!filtered) {
    console.log(`No items belonging to seller with ID: ${sellerId}`);
  }

  return filtered;
}

module.exports = { readById, readByCategory, readByPriceAsc, readByPriceDesc, 
  readAll, readPublicItems, readByGroup, readItemsBySeller };
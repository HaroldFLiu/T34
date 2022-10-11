const { Item } = require('../../models/item');

const updateById = async (itemId, props) => {
  const item = await Item.findById(itemId);

  if (!item) {
    console.log(`Cannot find item with ID: ${itemId}`);
    return undefined;
  }

  for (const property in props) {
    item[property] = props[property];
  }

  await item.save();

  return item;
};

module.exports = { updateById };
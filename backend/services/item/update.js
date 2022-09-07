const { Item } = require('../../models/item');

const updateById = async (itemId, props) => {
  const item = await Item.findById(itemId);

  for (const property in props) {
    item[property] = props[property];
  }

  await item.save();

  return item;
};

module.exports = { updateById };
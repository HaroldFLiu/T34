const { async } = require('ramda-adjunct');
const { isNilOrEmpty } = require('ramda-adjunct');
const { Item } = require('../../models/item');

const updateById = async (itemId, props) => {
  const item = await Item.findById(itemId);

  if (isNilOrEmpty(item)) {
    return undefined;
  }

  for (const property in props) {
    item[property] = item[property];
  }

  await item.save();

  return item;
};

module.exports = { updateById };
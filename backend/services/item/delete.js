const { Item } = require('../../models/item');

const deleteById = async (itemId) => {
  const deletedItem = await Item.findByIdAndDelete(itemId);
  return deletedItem;
};

module.exports = { deleteById };
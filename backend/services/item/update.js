const { Item } = require('../../models/item');

const updateById = async (itemId, props) => {
  const item = await Item.findById(itemId);

  for (const property in props) {
    item[property] = props[property];
  }

  await item.save();

  return item;
};

const addCategory = async (itemId, categoryId) => {
  const item = await Item.findById(itemId);

  const categoryIndex = item.category_ids.findIndex(
    (x) => JSON.stringify(x.categoryId) == JSON.stringify(categoryId)
  );

  //< 0 means category is not currently added
  if (categoryIndex < 0) {
    item.category_ids.push(categoryId);
  }

  await item.save();

  return item;
};



module.exports = { updateById, addCategory };
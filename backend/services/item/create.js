const { Item } = require('../../models/item');

const create = async ({
  name,
  description,
  price,
  category_ids,
  //seller,
}) => {
  const item = await Item.create({
    name,
    description,
    price,
    category_ids,
    //seller,
  });
  return item;
};

module.exports = { create };
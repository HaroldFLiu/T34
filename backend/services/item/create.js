const { Item } = require('../../models/item');

const create = async ({
  name,
  description,
  price,
  //category,
  //seller,
}) => {
  const item = await Item.create({
    name,
    description,
    price,
    //category,
    //seller,
  });
  return item;
};

module.exports = { create };
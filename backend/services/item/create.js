const { Item } = require('../../models/item');

const create = async ({
  name,
  description,
  price,
  category,
  seller,
}) => {
  const item = await Item.create({
    name,
    description,
    price,
    category,
    phone_number,
    seller,
  });
  return patient;
};

module.exports = { item };
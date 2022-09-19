const { Item } = require('../../models/item');

const create = async ({
  name,
  description,
  price,
  category_ids,
  group_ids,
  public_visibility,
  //seller,
  comments,
}) => {
  const item = await Item.create({
    name,
    description,
    price,
    category_ids,
    group_ids,
    public_visibility,
    //seller,
    comments,
  });
  return item;
};

module.exports = { create };
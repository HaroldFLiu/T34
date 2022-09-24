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
  image_urls,
  cloudinary_ids
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
    image_urls,
    cloudinary_ids
  });
  return item;
};

module.exports = { create };
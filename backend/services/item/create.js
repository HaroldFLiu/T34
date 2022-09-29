const { Item } = require('../../models/item');

const create = async ({
  name,
  description,
  price,
  category_ids,
  group_ids,
  public_visibility,
  seller_id,
  buyer_id,
  comments,
  image_urls,
  cloudinary_ids,
  sold
}) => {
  const item = await Item.create({
    name,
    description,
    price,
    category_ids,
    group_ids,
    public_visibility,
    seller_id,
    buyer_id,
    comments,
    image_urls,
    cloudinary_ids,
    sold
  });
  return item;
};

module.exports = { create };
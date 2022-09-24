const { Item } = require('../../models/item');
const cloudinary = require('../../middleware/cloudinary');

const deleteById = async (itemId) => {
  const item = await Item.findById(itemId);

  for (const image of item.cloudinary_ids) {
    await cloudinary.uploader.destroy(image);
  }
  
  const deletedItem = await Item.findByIdAndDelete(itemId);
  return deletedItem;
};

module.exports = { deleteById };
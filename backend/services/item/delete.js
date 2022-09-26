const { Item } = require('../../models/item');
const cloudinary = require('../../middleware/cloudinary');
const itemService = require('../item');

const deleteById = async (itemId) => {
  const item = await Item.findById(itemId);

  for (const image of item.cloudinary_ids) {
    await cloudinary.uploader.destroy(image);
  }
  
  const deletedItem = await Item.findByIdAndDelete(itemId);
  return deletedItem;
};

const deleteGroup = async (groupId) => {
  const items = await itemService.readByGroup(groupId);

  for (const item in items) {
    const index = item.group_ids.indexOf(groupId);

    if (index > -1) {
      item.group_ids.splice(index, 1);

      await item.save();
    }
  }
 
}

module.exports = { deleteById, deleteGroup };
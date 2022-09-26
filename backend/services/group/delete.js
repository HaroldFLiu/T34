const { Group } = require('../../models/group');
const cloudinary = require('../../middleware/cloudinary');
const itemService = require('../item');

const deleteById = async (groupId) => {
  const group = await Group.findById(groupId);
  // await cloudinary.uploader.destroy(group.cloudinary_id);

  // delete group id in all items that have the group
  await itemService.deletedGroup(groupId);

  const deletedGroup = await Group.findByIdAndDelete(groupId);
  return deletedGroup;
};

module.exports = { deleteById };
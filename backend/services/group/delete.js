const { Group } = require('../../models/group');

const deleteById = async (groupId) => {
  const group = await Group.findById(groupId);
  await cloudinary.uploader.destroy(group.cloudinary_id);

  const deletedItem = await Group.findByIdAndDelete(groupId);
  return deletedItem;
};

module.exports = { deleteById };
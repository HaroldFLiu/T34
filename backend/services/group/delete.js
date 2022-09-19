const { Group } = require('../../models/group');

const deleteById = async (groupId) => {
  const deletedItem = await Group.findByIdAndDelete(groupId);
  return deletedItem;
};

module.exports = { deleteById };
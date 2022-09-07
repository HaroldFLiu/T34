const { Item } = require('../../models/item');

const updateById = async (groupId, props) => {
  const group = await Item.findById(groupId);

  for (const property in props) {
    group[property] = group[property];
  }

  await group.save();

  return group;
};
  
module.exports = { updateById };
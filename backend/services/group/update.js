const { Group } = require('../../models/group');

const updateById = async (groupId, props) => {
  const group = await Group.findById(groupId);

  for (const property in props) {
    group[property] = props[property];
  }

  await group.save();

  return group;
};
  
module.exports = { updateById };
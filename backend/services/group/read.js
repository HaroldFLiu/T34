const { Group } = require('../../models/group');

const { isNilOrEmpty } = require('ramda-adjunct');
const { isMongoId } = require('validator');

const readById = async (groupId) => {
  if (!isMongoId(`${groupId}`)) {
    return undefined;
  }
  const group = await Group.findById(groupId);

  if (isNilOrEmpty(group)) {
    console.log(`Cannot find group with id: ${groupId}`);
  }

  return group;
};

const readAll = async () => {
  return Group.find();
};

const readByUser = async (userId) => {
  if (!isMongoId(`${userId}`)) {
    return undefined;
  }
  const groups = await readAll();

  const userGroups = groups.filter((x) => x.members.includes(userId));

  return userGroups;
}


module.exports = { readById, readAll, readByUser };
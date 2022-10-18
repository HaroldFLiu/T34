const { Group } = require('../../models/group');

const { isNilOrEmpty } = require('ramda-adjunct');
const { isMongoId } = require('validator');

const readById = async (groupId) => {
  if (!isMongoId(`${groupId}`)) {
    console.log(`Group ID: ${groupId} is not a valid MongoID`);
    return undefined;
  }
  const group = await Group.findById(groupId);

  if (isNilOrEmpty(group)) {
    console.log(`Cannot find group with ID: ${groupId}`);
  }

  return group;
};

const getMembership = async (groupId, userId) => {
  if (!isMongoId(`${groupId}`)) {
    console.log(`Group ID: ${groupId} is not a valid MongoID`);
    return undefined;
  }

  if (!isMongoId(`${userId}`)) {
    console.log(`User ID: ${userId} is not a valid MongoID`);
    return undefined;
  }

  const group = await Group.findById(groupId);

  if (isNilOrEmpty(group)) {
    console.log(`Cannot find group with ID: ${groupId}`);
  }

  if (group.members.includes(userId)) {
    return true;
  }

  return false;
};

const readAll = async () => {
  return Group.find();
};

const readByUser = async (userId) => {
  if (!isMongoId(`${userId}`)) {
    console.log(`${userId} is not a valid MongoID`);
    return undefined;
  }
  const groups = await readAll();

  const userGroups = groups.filter((x) => x.members.includes(userId));

  return userGroups;
}

const readOtherGroups = async (userId) => {
  if (!isMongoId(`${userId}`)) {
    console.log(`${userId} is not a valid MongoID`);
    return undefined;
  }
  const groups = await readAll();

  const userGroups = groups.filter((x) => !x.members.includes(userId));

  return userGroups;
}



module.exports = { readById, readAll, readByUser, readOtherGroups, getMembership};
const { Group } = require('../../models/group');

const { isNilOrEmpty } = require('ramda-adjunct');
const { isMongoId } = require('validator');

const readById = async (groupId) => {
  if (!isMongoId(`${groupId}`)) {
    return undefined;
  }
  const group = await Group.findById(group);

  if (isNilOrEmpty(group)) {
    console.log(`Cannot find group with id: ${groupId}`);
  }

  return group;
};

const readAll = async () => {
  return Group.find();
};


module.exports = { readById, readAll };
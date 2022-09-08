const { Group } = require('../../models/group');

const create = async ({
  name,
  description,
  members,
  admins,
}) => {
  const group = await Group.create({
    name,
    description,
    members,
    admins,
  });
  return group;
};

module.exports = { create };
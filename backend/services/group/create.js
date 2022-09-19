const { Group } = require('../../models/group');

const create = async ({
  name,
  description,
  members,
  admins,
}) => {
  const grouup = await Group.create({
    name,
    description,
    members,
    admins,
  });
  return item;
};

module.exports = { create };
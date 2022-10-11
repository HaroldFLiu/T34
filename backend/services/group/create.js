const { Group } = require('../../models/group');

const create = async ({
  name,
  description,
  members,
  admins,
  icon_url,
  cloudinary_id,
}) => {
  const group = await Group.create({
    name,
    description,
    members,
    admins,
    icon_url,
    cloudinary_id,
  });
  return group;
};

module.exports = { create };
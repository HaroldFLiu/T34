const { User } = require('../../models/user');

const create = async ({
  first_name,
  last_name,
  email,
  password,
  groups,
  items,
}) => {
  const user = await User.create({
    first_name,
    last_name,
    email,
    password,
    groups,
    items,
  });
  return user;
};

module.exports = { create };
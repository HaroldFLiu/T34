const { User } = require('../../models/user');

const updateById = async (userId, props) => {
  const user = await User.findById(userId);

  if (!user) {
    console.log(`Cannot find user with ID: ${userId}`);
    return undefined;
  }

  for (const property in props) {
    user[property] = props[property];
  }

  await user.save();

  return user;
};

module.exports = { updateById };
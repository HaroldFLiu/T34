const { User } = require('../../models/user');
const { isNotEmpty } = require('ramda-adjunct');

const deleteById = async (userId) => {
  const user = await User.findById(userId);

  if (!user) {
    console.log(`Cannot find item with ID: ${userId}`);
    return undefined;
  }
  const deletedUser = await User.findByIdAndDelete(userId);
  console.log(`Deleted item by ID: ${userId}, Item: ${JSON.stringify(deletedUser)}`);
  return deletedUser;
};

module.exports = { deleteById };
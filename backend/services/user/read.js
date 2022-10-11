const { User } = require('../../models/user');

const { isNilOrEmpty } = require('ramda-adjunct');
const { isMongoId } = require('validator');

const readById = async (userId) => {
  if (!isMongoId(`${userId}`)) {
    console.log(`User does not have valid MongoID`);
    return undefined;
  }
  const user = await User.findById(userId);

  if (isNilOrEmpty(user)) {
    console.log(`Cannot find user with id: ${userId}`);
  }

  return user;
};

module.exports = {
    readById,
}
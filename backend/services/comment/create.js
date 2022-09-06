const { Comment } = require('../../models/item');

const create = async ({
  itemId,
  userId,
  string,
}) => {
  const comment = await Item.create({
    itemId,
    userId,
    string,
  });
  return comment;
};

module.exports = { create };
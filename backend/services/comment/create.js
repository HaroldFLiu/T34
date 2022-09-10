const { Comment } = require('../../models/item');

const create = async ({
  userId,
  string,
}) => {
  const comment = await Item.create({
    userId,
    string,
  });
  return comment;
};

module.exports = { create };
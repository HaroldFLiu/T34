const { Comment, Item } = require('../../models/item');

const create = async ({
  itemId,
  userId,
  string,
}) => {
  const comment = await Comment.create({
    userId,
    string,
  });
  
  const item = await Item.findById(itemId);
  item.comments.push(comment);
  return comment;

};

module.exports = { create };
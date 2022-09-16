const { Item } = require('../../models/item');
const { Comment } = require('../../models/comment');

const create = async ({
  itemId,
  userId,
  content,
}) => {
  const comment = await Comment.create({
    userId,
    content,
  });
  
  const item = await Item.findById(itemId);
  item.comments.push(comment);
  return comment;

};

module.exports = { create };
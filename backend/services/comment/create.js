const { Item } = require('../../models/item');
const { Comment } = require('../../models/comment');

const create = async ({
  user,
  content,
  itemId,
}) => {
  const comment = await Comment.create({
    user,
    content,
  });
  
  const item = await Item.findById(itemId);
  item.comments.push(comment._id);
  await item.save()
  //console.log(item);
  return comment;

};

module.exports = { create };
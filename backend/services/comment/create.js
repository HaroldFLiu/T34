const { Item } = require('../../models/item');
const { Comment } = require('../../models/comment');

const create = async ({
  user,
  content,
  item_id,
}) => {
  const comment = await Comment.create({
    user,
    content,
    item_id,
  });
  
  const item = await Item.findById(item_id);
  item.comments.push(comment._id);
  await item.save()
  //console.log(item);
  return comment;

};

module.exports = { create };
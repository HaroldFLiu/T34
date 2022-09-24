const { Comment } = require('../../models/comment');

const { isNilOrEmpty } = require('ramda-adjunct');
const { isMongoId } = require('validator');
const { Item } = require('../../models/item');

const readById = async (commentId) => {
  if (!isMongoId(`${commentId}`)) {
    return undefined;
  }
  const comment = await Comment.findById(commentId);

  if (isNilOrEmpty(Comment)) {
    console.log(`Cannot find Comment with id: ${commentId}`);
  }

  return comment;
};

const readByItem = async (itemId) => {
  if (!isMongoId(`${itemId}`)) {
    return undefined;
  }
  const item = await Item.findById(itemId);
  if (isNilOrEmpty(item.comments)) {
    console.log('Item has no comments');
  }
  return item.comments;


}
module.exports = { readById, readByItem };
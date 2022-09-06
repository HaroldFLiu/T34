const { Comment } = require('../../models/comment');

const { isNilOrEmpty } = require('ramda-adjunct');
const { isMongoId } = require('validator');

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


module.exports = { readById };
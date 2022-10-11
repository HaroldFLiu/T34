const { Comment } = require('../../models/comment');
const itemService = require('../item');

const deleteById = async (commentId) => {
  await itemService.deleteComment(commentId);

  const deletedComment = await Comment.findByIdAndDelete(commentId);

  return deletedComment;
};

module.exports = { deleteById };
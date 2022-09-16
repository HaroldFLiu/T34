const { Comment } = require('../../models/comment');

const deleteById = async (commentId) => {
  const deletedComment = await Comment.findByIdAndDelete(commentId);
  
  return deletedComment;
};

module.exports = { deleteById };
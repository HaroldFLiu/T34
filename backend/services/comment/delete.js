const { Comment } = require('../../models/comment');

const deleteById = async (commentId) => {
  const deletedComment = await Comment.findByIdAndDelete(commentId);
  //add method to delete from item 
  return deletedComment;
};

module.exports = { deleteById };
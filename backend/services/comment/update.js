const { Comment } = require('../../models/comment');

const updateById = async (commentId, newString) => {
  const comment = await Comment.findById(commentId);

  comment.string = newString;
  await comment.save();

  return comment; 
};



module.exports = { updateById };
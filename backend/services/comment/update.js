const { Comment } = require('../../models/comment');
const { Item } = require('../../models/item');

const updateById = async (commentId, newString) => {
  const comment = await Comment.findById(commentId);

  comment.content = newString;
  await comment.save();

  return comment; 
};

module.exports = { updateById };
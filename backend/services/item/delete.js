const { Item } = require('../../models/item');
const cloudinary = require('../../middleware/cloudinary');
const { readByGroup } = require('./read');
const { Comment } = require('../../models/comment');

const deleteById = async (itemId) => {
  const item = await Item.findById(itemId);

  for (const image of item.cloudinary_ids) {
    await cloudinary.uploader.destroy(image);
  }
  
  const deletedItem = await Item.findByIdAndDelete(itemId);
  return deletedItem;
};

const deleteGroup = async (groupId) => {
  const items = await readByGroup(groupId);

  for (const item of items) {
    if (item.group_ids) {
      const index = item.group_ids.indexOf(groupId);

      if (index > -1) {
        item.group_ids.splice(index, 1);
  
        await item.save();
      }
    }
  }
}

const deleteComment = async (commentId) => {
  const comment = await Comment.findById(commentId);
  const item = await Item.findById(comment.item_id);

  if (item.comments) {
    const index = item.comments.indexOf(commentId);

    if (index > -1) {
      item.comments.splice(index, 1);
    }

    await item.save();
  }
}

module.exports = { deleteById, deleteGroup, deleteComment };
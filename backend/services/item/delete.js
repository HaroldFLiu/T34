const { Item } = require('../../models/item');
const cloudinary = require('../../middleware/cloudinary');
const { readByGroup } = require('./read');
const { Comment } = require('../../models/comment');
const { isNotEmpty } = require('ramda-adjunct');

const deleteById = async (itemId) => {
  const item = await Item.findById(itemId);

  if (!item) {
    console.log(`Cannot find item with ID: ${itemId}`);
    return undefined;
  }

  // delete images from service
  /*
  for (const image of item.cloudinary_ids) {
    await cloudinary.uploader.destroy(image);
  }*/
  
  const deletedItem = await Item.findByIdAndDelete(itemId);
  console.log(`Deleted item by ID: ${itemId}, Item: ${JSON.stringify(deletedItem)}`);
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
    } else {
      console.log(`No group IDs on item with ID: ${item._id}`);
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
  } else {
    console.log(`No comments on item with ID: ${item._id}`);
  }
}

module.exports = { deleteById, deleteGroup, deleteComment };
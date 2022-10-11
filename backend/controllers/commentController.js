const { default: mongoose } = require('mongoose');
const { Item } = require('react-bootstrap/lib/Breadcrumb');
const commentService = require('../services/comment');
const itemService = require('../services/item');

const createComment = async (req, res) => {
    const { itemId } = req.params;
    const { userId, string } = req.body;

    try {
        const comment = await commentService.create({itemId, userId, string});
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

const getComment = async (req, res) => {
    const { commentId } = req.body;
    if (!mongoose.Types.ObjectId.isValid(commentId)) {
        return res.status(404).json({error: 'Comment does not exist'});
    }
    const comment = await commentService.readById(commentId);
    if (!comment) {
        return res.status(404).json({error: 'Comment does not exist'});
    }
    res.status(200).json(comment);
}

const getComments = async (req, res) => {
    const { itemId } = req.params; 
    if (!mongoose.Types.ObjectId.isValid(itemId)) {
        return res.status(404).json({error: 'Item does not exist'});
    }
    const comments = await commentService.readByItem(itemId);
    if (!comments) {
        return res.status(404).json({error: 'No comments'});
    }
    res.status(200).json(comments);
    
}

const deleteComment = async (req, res) => {
    const { itemId } = req.params;
    const { commentId } = req.body;

    if (!mongoose.Types.ObjectId.isValid(commentId)) {
        return res.status(404).json({error: 'Comment does not exist'});
    }
    
    if (!mongoose.Types.ObjectId.isValid(itemId)) {
        return res.status(404).json({error: 'Item does not exist'});
    }
    const item = await Item.findbyId(itemId);
    for (let i = 0; i < item.comments.length; i++) {
        if (item.comments[i] == commentId) {
            const item2 = await itemService.deleteComment(commentId);
            if (!item2) {
                return res.status(404).json({error: 'Comment failed to delete from item'});
            }

            const comment = await commentService.deleteById(commentId);
            if (!comment) {
                return res.status(404).json({error: 'Comment failed to delete'});
            }
            return res.status(204);
        }
    }
    return res.status(404).json({error: 'Comment not found in item'});

}

const updateComment = async (req, res) => {
    const { itemId } = req.params;
    const { commentId, string } = req.body; 
    if (!mongoose.Types.ObjectId.isValid(commentId)) {
        return res.status(404).json({error: 'Comment does not exist'});
    }
    if (!mongoose.Types.ObjectId.isValid(itemId)) {
        return res.status(404).json({error: 'Item does not exist'});
    }
    const item = await Item.findbyId(itemId);
    for (let i = 0; i < item.comments.length; i++) {
        if (item.comments[i] == commentId) {
            const comment = await commentService.updateById(commentId, string);
            if (!comment) {
                return res.status(404).json({error: 'Comment failed to update'});
            }
            return res.status(200).json(comment);
        }
    }
    return res.status(404).json({error: 'Comment not found in item'});

}
module.exports = {
    createComment,
    getComment,
    getComments,
    deleteComment,
    updateComment,
}
const { default: mongoose } = require('mongoose');
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
    const { commentId } = req.body;

    if (!mongoose.Types.ObjectId.isValid(commentId)) {
        return res.status(404).json({error: 'Comment does not exist'});
    }

    const group = await commentService.deleteById(commentId);
    if (!comment) {
        return res.status(404).json({error: 'Comment failed to delete'});
    }
    //res.status(200).json(comment);

}

const updateComment = async (req, res) => {

    const { commentId, string } = req.body; 
    if (!mongoose.Types.ObjectId.isValid(commentId)) {
        return res.status(404).json({error: 'Comment does not exist'});
    }

    const group = await commentService.updateById(commentId, string)
    if (!comment) {
        return res.status(404).json({error: 'Comment failed to update'});
    }
    res.status(200).json(comment)
}
module.exports = {
    createComment,
    getComment,
    getComments,
    deleteComment,
    updateComment,
}
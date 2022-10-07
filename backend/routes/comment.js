const express = require('express');

const {
    createComment,
    getComment,
    getComments,
    deleteComment,
    updateComment,
} = require ('../controllers/commentController')

const router = express.Router();

// GET a comment
router.get('/', getComment);

// GET comments from itemid
router.get('/:itemId', getComments)

// POST a comment
router.post('/:itemId', createComment);

// DELETE a comment
router.delete('/:itemId', deleteComment);

// UPDATE a comment
router.patch('/:itemId', updateComment);

const express = require('express');

const {
    createComment,
    getComment,
    deleteComment,
    updateComment,
} = require ('../controllers/commentController')

const router = express.Router();

// GET a comment
router.get('/', getComment);

// POST a comment
router.post('/', createComment);

// DELETE a comment
router.delete('/', deleteComment);

// UPDATE a comment
router.patch('/', updateComment);

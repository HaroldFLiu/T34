const express = require('express');
const {
    createGroup,
    getGroups,
    getGroup,
    deleteGroup,
    updateGroup,
} = require('../controllers/groupController')

const router = express.Router();

// GET all groups
router.get('/', getGroups);

// GET a group
router.get('/:group_id', getGroup);

// POST a group
router.post('/', createGroup);

// DELETE a group
router.delete('/:group_id', deleteGroup);

// UPDATE a group
router.patch('/:group_id', updateGroup);

module.exports = router;

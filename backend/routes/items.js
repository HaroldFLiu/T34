const express = require('express');
const {
    createItem,
    getPublicItems,
    getItem,
    deleteItem,
    updateItem,
} = require('../controllers/itemController')

const router = express.Router();

// GET all public items
router.get('/', getPublicItems);    

// GET a single item
router.get('/:item_id', getItem);

// POST an item
router.post('/', createItem);

// DELETE an item
router.delete('/:item_id', deleteItem);

// UPDATE an item
router.patch('/:item_id', updateItem);

module.exports = router;
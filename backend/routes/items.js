const express = require('express');
const { default: mongoose } = require('mongoose');
const upload = require('../middleware/multer');
const cloudinary = require('../middleware/cloudinary');

const {
    getPublicItems,
    getCategoryItems,
    getItem,
    deleteItem,
} = require('../controllers/itemController');

const {
    getCatergories,
} = require('../controllers/categoryController');

const itemService = require('../services/item');

const router = express.Router();

// GET all public items
router.get('/public', getPublicItems);    

// GET all public items in a category
router.get('/public/:category_id', getCategoryItems);

// GET a single item
router.get('/public/:item_id', getItem);

// POST an item
router.post('/public', async (req, res) => {
    // get other descriptors
    const {name, description, price, category_ids, group_ids, 
        public_visibility, comments} = req.body;

    try {
        // create item
        const item = await itemService.create({name, description, price, category_ids, 
            group_ids, public_visibility, comments });
        res.status(200).json(item);
    } catch (error) {
        res.status(400).json({error: error.message})
    }
});

// DELETE an item
router.delete('/public/:item_id', deleteItem);

// UPDATE an item
router.patch('/public/:item_id', async (req, res) => {
    const { item_id } = req.params;
    console.log(item_id);
    console.log(req.body);

    /*

    // ensure id is valid
    if (!mongoose.Types.ObjectId.isValid(item_id)) {
        return res.status(404).json({error: 'Invalid id'});
    }

    const item = await itemService.readById(item_id);

    if (!item) {
        return res.status(404).json({error: 'No item with that ID'});
    }

    // update item
    for (const property in req.body) {
        item[property] = req.body[property];
    }

    
    await item.save();

    res.status(200).json(item);*/
});


module.exports = router;
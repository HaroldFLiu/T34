const express = require('express');
const { default: mongoose } = require('mongoose');
const upload = require('../middleware/multer');
const cloudinary = require('../middleware/cloudinary');

const {
    getPublicItems,
    getItem,
    deleteItem,
    updateItem,
} = require('../controllers/itemController');

const itemService = require('../services/item');

const router = express.Router();

// GET all public items
router.get('/', getPublicItems);

// GET a single item
router.get('/:item_id', getItem);

// POST an item
router.post('/', upload.array('images', 12), async (req, res) => {
    const urls = [];
    const ids = [];
    const files = req.files;
    for (const file of files) {
        try {
            const result = await cloudinary.uploader.upload(file.path);
            urls.push(result.secure_url);
            ids.push(result.public_id);
        } catch (err) {
            console.log(err);
        }

    }
    
    const {name, description, price, category_ids, group_ids, 
        public_visibility, comments} = req.body;

    try {
        // why can't i assign off the bat
        const item = await itemService.create({name, description, price, category_ids, group_ids, public_visibility, comments, urls, ids});

        for (const url of urls) {
            item.image_urls.push(url);
        }

        for (const id of ids) {
            item.cloudinary_ids.push(id);
        }

        await item.save();

        res.status(200).json(item);
    } catch (error) {
        res.status(400).json({error: error.message})
    }
});

// DELETE an item
router.delete('/:item_id', deleteItem);

// UPDATE an item
router.patch('/:item_id', upload.array('images', 12), async (req, res) => {
    const { item_id } = req.params;
    const urls = [];
    const ids = [];
    const files = req.files;
    for (const file of files) {
        try {
            const result = await cloudinary.uploader.upload(file.path);
            urls.push(result.secure_url);
            ids.push(result.public_id);
        } catch (err) {
            console.log(err);
        }

    }

    if (!mongoose.Types.ObjectId.isValid(item_id)) {
        return res.status(404).json({error: 'Invalid id'});
    }

    const item = await itemService.readById(item_id);

    for (const image of item.cloudinary_ids) {
        await cloudinary.uploader.destroy(image);
    }

    while (item.image_urls.length > 0) {
        item.image_urls.pop();
    }

    while (item.cloudinary_ids.length > 0) {
        item.cloudinary_ids.pop();
    }

    for (const property in req.body) {
        item[property] = req.body[property];
    }

    for (const url of urls) {
        item.image_urls.push(url);
    }

    for (const id of ids) {
        item.cloudinary_ids.push(id);
    }
    
    await item.save();

    if (!item) {
        return res.status(404).json({error: 'Item does not exist'});
    }

    res.status(200).json(item);
});


module.exports = router;
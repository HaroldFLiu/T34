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
    const image_urls = [];
    const cloudinary_ids = [];
    const files = req.files;
    for (const file of files) {
        try {
            const result = await cloudinary.uploader.upload(file.path);
            image_urls.push(result.secure_url);
            cloudinary_ids.push(result.public_id);
        } catch (err) {
            console.log(err);
        }

    }
    
    const {name, description, price, category_ids, group_ids, 
        public_visibility, comments} = req.body;

    try {
        // why can't i assign off the bat
        const item = await itemService.create({name, description, price, category_ids, 
            group_ids, public_visibility, comments, image_urls, cloudinary_ids});

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
    const image_urls = [];
    const cloudinary_ids = [];
    const files = req.files;
    for (const file of files) {
        try {
            const result = await cloudinary.uploader.upload(file.path);
            image_urls.push(result.secure_url);
            cloudinary_ids.push(result.public_id);
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

    for (const property in req.body) {
        item[property] = req.body[property];
    }

    item.image_urls = image_urls;
    item.cloudinary_ids = cloudinary_ids;
    
    await item.save();

    if (!item) {
        return res.status(404).json({error: 'Item does not exist'});
    }

    res.status(200).json(item);
});


module.exports = router;
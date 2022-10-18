const express = require('express');
const { default: mongoose } = require('mongoose');

//const upload = require('../middleware/multer');
const cloudinary = require('../middleware/cloudinary');
const upload = require('../middleware/multer');
const { authenticate } = require('../middleware/authenticate');

//const CLOUDINARY_URL='https://api.cloudinary.com/v1_1/dvudxm6kj/image/upload';
//const CLOUDINARY_UPLOAD_PRESET = 'T34ITProject';

const {
    getPublicItems,
    getCategoryItems,
    getItem,
    deleteItem,
    getUserItems,
    getUserItemsWithCategory,
} = require('../controllers/itemController');

const {
    getCatergories,
} = require('../controllers/categoryController');

const itemService = require('../services/item');

const router = express.Router();

// GET all public items
router.get('/public', getPublicItems);    

// GET all public items in a category
router.get('/public/category/:category_id', getCategoryItems);

// GET a single item
router.get('/public/item/:item_id', getItem);

// GET a user's items
router.get('/items/:user_id', getUserItems);

// GET a user's items by ctageory
router.get('/items/:user_id/:category_id', getUserItemsWithCategory);

// POST an item
router.post('/public', authenticate, async (req, res) => {
    // get other descriptors  
    const {name, description, price, category_ids, group_ids, 
        public_visibility, comments, image_urls} = req.body;
    const {userId} = req.session;

    try {
        // create item
        const item = await itemService.create({name, description, price, category_ids, 
            group_ids, public_visibility, seller_id: userId, comments, image_urls});
        res.status(200).json(item);
    } catch (error) {
        res.status(400).json({error: error.message})
    }
});


// POST an image 
router.post('/public/image', upload.single('file'), async (req, res) => {
    // handle images
    const image_urls = [];
    const file = req.file
    //console.log(req.files.length);
    if (file) {
        try {
            const result = await cloudinary.uploader.upload(file.path);
            image_urls.push(result.secure_url);
            //console.log(result.secure_url)
            res.status(200).json({image_urls: image_urls});
        } catch (err) {
            res.status(400).json({msg: 'failed to upload image'})
        }
    }
});


// DELETE an item
router.delete('/public/:item_id', deleteItem);

// UPDATE an item
router.patch('/public/:item_id', async (req, res) => {
    const { item_id } = req.params;
    //console.log(item_id);
    //console.log(req.body);

    // ensure id is valid
    if (!mongoose.Types.ObjectId.isValid(item_id)) {
        return res.status(404).json({error: 'Invalid Mongo ID'});
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

    res.status(200).json(item);
});


module.exports = router;
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

router.post('/public/:itemId/image', async (req, res) => {
    const itemId = req.itemId
    let image_url, cloudinary_id;
    const image = req.body

    console.log(image);

    // handle images
    try {
        const result = await cloudinary.uploader.upload(image);
        image_url = result.secure_url;
        cloudinary_id = result.public_id;
    } catch (err) {
        console.log({error: "image handle fail"});
    }
    /*
    try {
        // upload image after 
        await itemService.updateById(itemId, {image_urls: [image_url], cloudinary_ids: [cloudinary_id]});
        const item = itemService.readById(itemId);
        res.status(200).json(item);
    } catch (error) {
        res.status(400).json({error: "updating errror"});
    }*/
});

// DELETE an item
router.delete('/public/:item_id', deleteItem);

// UPDATE an item
router.patch('/public/:item_id', async (req, res) => {
    const { item_id } = req.params;
/*
    // handle images
    const image_urls = [];
    const cloudinary_ids = [];
    const files = req.files;
    if (files){
        for (const file of files) {
            try {
                const result = await cloudinary.uploader.upload(file.path);
                image_urls.push(result.secure_url);
                cloudinary_ids.push(result.public_id);
            } catch (err) {
                console.log(err);
            }
        }
    }*/

    // ensure id is valid
    if (!mongoose.Types.ObjectId.isValid(item_id)) {
        return res.status(404).json({error: 'Invalid id'});
    }

    const item = await itemService.readById(item_id);

    /*
    // destroy current images --> when uploading, must upload all images you want
    for (const image of item.cloudinary_ids) {
        await cloudinary.uploader.destroy(image);
    }*/

    // update item
    for (const property in req.body) {
        item[property] = req.body[property];
    }

   // item.image_urls = image_urls;
   // item.cloudinary_ids = cloudinary_ids;
    
    await item.save();

    if (!item) {
        return res.status(404).json({error: 'Item does not exist'});
    }

    res.status(200).json(item);
});


module.exports = router;
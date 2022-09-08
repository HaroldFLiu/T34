const express = require('express');
const { default: mongoose } = require('mongoose');
const multer = require('multer');
const {
    createItem,
    getPublicItems,
    getItem,
    deleteItem,
    updateItem,
} = require('../controllers/itemController')
var upload = multer({dest: 'uploads/'});

const router = express.Router();

// GET all public items
router.get('/', getPublicItems);

// GET a single item
router.get('/:item_id', getItem);

// POST an item
router.post('/', upload.array('photos', 12), createItem);

// DELETE an item
router.delete('/:item_id', deleteItem);

// UPDATE an item
router.patch('/:item_id', updateItem);

const connect = mongoose.createConnection(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

let gfs;

connect.once('open', () => {
    gfs = new mongoose.mongo.GridFSBucket(connect.db, {
        bucketName: "uploads"
    });
});

module.exports = router;
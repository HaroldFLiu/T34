const express = require ('express');
const {
    getFavourite,
    addtoFavourite,
    deleteFromFavourite,
    deleteAllFromFavourite,
} = require ('../controllers/favouritesController')
const { authenticate } = require('../middleware/authenticate');

const router = express.Router();

// GET a favourite
router.get('/favourites/:userId', authenticate, getFavourite);

// ADD a favourite item
router.patch('/favourites/:userId/add/:itemId', authenticate, addtoFavourite);

// DELETE a favourite item
router.patch('/favourites/:userId/remove/:itemId', authenticate, deleteFromFavourite);

// REMOVE all favourite items
router.patch('/favourites/:userId/removeAll', authenticate, deleteAllFromFavourite);

module.exports = router;
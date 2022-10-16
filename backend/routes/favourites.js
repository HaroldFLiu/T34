const express = require ('express');
const {
    getFavourite,
    addtoFavourite,
    deleteFromFavourite,
    deleteAllFromFavourite,
} = require ('../controllers/favouritesController')

const router = express.Router();

// GET a favourite
router.get('/favourites/:userId', getFavourite);

// ADD a favourite item
router.patch('/favourites/:userId/:itemId', addtoFavourite);

// DELETE a favourite item
router.patch('/favourites/:userId/:itemId', deleteFromFavourite);

// REMOVE all favourite items
router.patch('/:favId', deleteAllFromFavourite);

module.exports = router;
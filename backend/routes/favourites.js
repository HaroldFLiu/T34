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
router.patch('/favourites/:userId/add/:itemId', addtoFavourite);

// DELETE a favourite item
router.patch('/favourites/:userId/remove/:itemId', deleteFromFavourite);

// REMOVE all favourite items
router.patch('/favourites/:userId/removeAll', deleteAllFromFavourite);

module.exports = router;
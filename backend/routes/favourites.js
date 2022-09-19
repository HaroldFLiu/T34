const express = require ('express');
const {
    createFavourite,
    getFavourite,
    deleteFavourite,
    addtoFavourite,
    deleteFromFavourite,
    deleteAllFromFavourite,
} = require ('../controllers/favouritesController')

const router = express.Router();

// GET a favourite
router.get('/:favId', getFavourite);

// POST a favourite
router.post('/:userId', createFavourite);

// DELETE a favourite
router.delete('/:favId', deleteFavourite);

// ADD an item to favourite
router.patch('/:favId', addtoFavourite);

// REMOVE an item from favourite
router.patch('/:favId', deleteFromFavourite);

// REMOVE all items from favourite
router.patch('/:favId', deleteAllFromFavourite);

module.exports = router;
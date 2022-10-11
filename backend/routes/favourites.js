const express = require ('express');
const {
    createFavourite,
    getFavourite,
    deleteFavourite,
    updateFavourite,
} = require ('../controllers/favouritesController')

const router = express.Router();

// GET a favourite
router.get('/:favId', getFavourite);

// POST a favourite
router.post('/:userId', createFavourite);

// DELETE a favourite
router.delete('/:favId', deleteFavourite);

//  UPDATE a favourite
router.patch('/:favId', updateFavourite);



module.exports = router;
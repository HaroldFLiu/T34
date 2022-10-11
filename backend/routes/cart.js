const express = require('express');
const {
    createCart,
    getCart,
    updateCart,
    deleteCart,
    checkoutCart
} = require ('../controllers/cartController')

const router = express.Router();

// GET a cart
router.get('/:cartId', getCart);

// POST a cart
router.post('/:userId', createCart);

// UPDATE a cart
router.patch('/:cartId', updateCart);

// CHECKOUT a cart 
router.patch('/:cartId/checkout', checkoutCart)

// DELETE a cart
router.delete('/:cartId', deleteCart);

module.exports = router;


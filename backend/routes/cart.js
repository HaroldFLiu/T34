const express = require('express');
const {
    //createCart,
    getCart,
    addToCart,
    checkoutCart,
    deleteFromCart,
    deleteAllFromCart,
} = require ('../controllers/cartController')

const cartService = require('../services/cart');

const router = express.Router();

// GET a cart
router.get('/cart/:userId', getCart);

// POST a cart
//router.post('/:userId', createCart);

// ADD to cart
router.patch('/cart/:userId/:itemId', addToCart);

// DELETE item from cart
router.patch('/cart/:userId/:itemId', deleteFromCart);

// CHECKOUT a cart 
router.patch('/cart/:cartId/checkout', checkoutCart)

// DELETE whole cart
router.delete('/cart/:userId', deleteAllFromCart);

module.exports = router;


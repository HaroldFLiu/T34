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
const { authenticate } = require('../middleware/authenticate');

const router = express.Router();

// GET a cart
router.get('/cart/:userId', authenticate, getCart);

// POST a cart
//router.post('/:userId', createCart);

// ADD to cart
router.patch('/cart/:userId/add/:itemId', authenticate, addToCart);

// DELETE item from cart
router.patch('/cart/remove/:userId/:itemId', authenticate, deleteFromCart);

// CHECKOUT a cart 
router.patch('/cart/checkout/:userId/', authenticate, checkoutCart)

// DELETE whole cart
router.patch('/cart/removeAll/:userId', authenticate, deleteAllFromCart);

module.exports = router;


const express = require('express');
const {
    createCart,
    getCart,
    addToCart,
    checkoutCart,
    deleteFromCart,
    deleteAllFromCart,
    deleteCart
} = require ('../controllers/cartController')

const router = express.Router();

// GET a cart
router.get('/:cartId', getCart);

// POST a cart
router.post('/:userId', createCart);

// ADD item
router.patch('/', addToCart);

// CHECKOUT cart
router.patch('/:cartId', checkoutCart);

// REMOVE item from cart
router.patch('/:cartId', deleteFromCart);

// REMOVE all items from cart
router.patch('/:cartId', deleteAllFromCart);

// DELETE a cart
router.patch('/:cartId', deleteCart);



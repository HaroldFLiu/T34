const express = require('express');
const { default: mongoose } = require('mongoose');
const { authenticate } = require('../middleware/authenticate');

const {
    getCatergories, 
    getCatergory,
} = require('../controllers/categoryController');

const router = express.Router();

// GET all categories
router.get('/category', authenticate, getCatergories);    

router.get('/category/:categoryId', authenticate, getCatergory);   

module.exports = router;
const express = require('express');
const { default: mongoose } = require('mongoose');

const {
    getCatergories, 
    getCatergory,
} = require('../controllers/categoryController');

const router = express.Router();

// GET all categories
router.get('/category', getCatergories);    

router.get('/category/:categoryId', getCatergory);   

module.exports = router;
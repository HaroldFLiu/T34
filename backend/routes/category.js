const express = require('express');
const { default: mongoose } = require('mongoose');

const {
    getCatergories,
} = require('../controllers/categoryController');

const router = express.Router();

// GET all categories
router.get('/category', getCatergories);    

module.exports = router;
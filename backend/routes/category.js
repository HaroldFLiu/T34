const express = require('express');
const { default: mongoose } = require('mongoose');

const {
    getCatergories,
} = require('../controllers/categoryController');

const categoryService = require('../services/category');

const router = express.Router();

// GET all categories
router.get('/category', getCatergories);    

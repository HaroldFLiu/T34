const { default: mongoose } = require('mongoose');
const categoryService = require('../services/category');

const getCatergories = async (req, res) => {
    const categories = await categoryService.readAll();

    if (!categories) {
        return res.status(404).json({error: 'No categories'});
    }

    res.status(200).json(categories);
}

module.exports = {
    getCatergories
}


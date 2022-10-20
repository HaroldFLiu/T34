const { default: mongoose } = require('mongoose');
const categoryService = require('../services/category');

const getCatergories = async (req, res) => {
    const categories = await categoryService.readAll();

    if (!categories) {
        return res.status(404).json({error: 'No categories'});
    }

    res.status(200).json(categories);
}

const getCatergory = async (req, res) => {
    const { categoryId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(categoryId)) {
        return res.status(404).json({error: 'Invalid Mongo ID'});
    }

    const category = await categoryService.readById(categoryId);

    if (!category) {
        return res.status(404).json({error: 'No category'});
    }

    res.status(200).json(category);
}

module.exports = {
    getCatergories,
    getCatergory
}


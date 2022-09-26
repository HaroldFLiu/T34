const { default: mongoose } = require('mongoose');
const itemService = require('../services/item');

const getPublicItems = async (req, res) => {
    const items = await itemService.readPublicItems();

    if (!items) {
        return res.status(404).json({error: 'No items'});
    }

    res.status(200).json(items);
}

const getItem = async (req, res) => {
    const { item_id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(item_id)) {
        return res.status(404).json({error: 'Invalid id'});
    }

    const item = await itemService.readById(item_id);

    if (!item) {
        return res.status(404).json({error: 'Item does not exist'});
    }

    res.status(200).json(item);
}

const getCategoryItems = async (req, res) => {
    const { category_id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(category_id)) {
        return res.status(404).json({error: 'Invalid id'});
    }

    const items = await itemService.readPublicItems();
    const filtered = await itemService.readByCategory(category_id, items);

    if (!filtered) {
        return res.status(404).json({error: 'Items do not exist'});
    }

    res.status(200).json(filtered);
}

const deleteItem = async (req, res) => {
    const { item_id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(item_id)) {
        return res.status(404).json({error: 'Invalid id'});
    }

    const item = await itemService.deleteById(item_id);

    res.status(200).json({mssg: 'Item deleted successfully'});
}

const updateItem = async (req, res) => {
    const { item_id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(item_id)) {
        return res.status(404).json({error: 'Invalid id'});
    }

    const item = await itemService.updateById(item_id, req.body);

    if (!item) {
        return res.status(404).json({error: 'Item does not exist'});
    }

    res.status(200).json(item);
}

module.exports = {
    getPublicItems,
    getItem,
    deleteItem,
    updateItem,
    getCategoryItems,
}
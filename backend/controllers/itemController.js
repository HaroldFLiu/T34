const { default: mongoose } = require('mongoose');
const { itemService } = require('../../../../services/item');

const createItem = async (req, res) => {
    const {name, description, price, category_ids, group_ids, 
        public_visibility} = req.body;

    try {
        const item = await itemService.create({name, description, price, 
            category_ids, group_ids, public_visibility});
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const getPublicItems = async (req, res) => {
    const items = await itemService.readPublicItems();

    res.status(200).jason(items);
}

const getItem = async (req, res) => {
    const { item_id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(item_id)) {
        return res.status(404).json({error: 'Item does not exist'});
    }

    const item = await itemService.readById(item_id);

    if (!item) {
        return res.status(404).json({error: 'Item does not exist'});
    }

    res.status(200).json(item);
}

const deleteItem = async (req, res) => {
    const { item_id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(item_id)) {
        return res.status(404).json({error: 'Item does not exist'});
    }

    const item = await itemService.deleteItem(item_id);

    if (!item) {
        return res.status(404).json({error: 'Item does not exist'});
    }

    res.status(200).json(item);
}

const updateItem = async (req, res) => {
    const { item_id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(item_id)) {
        return res.status(404).json({error: 'Item does not exist'});
    }

    const item = await itemService.updateItem(item_id, req.body);

    if (!item) {
        return res.status(404).json({error: 'Item does not exist'});
    }

    res.status(200).json(item);
}

module.exports = {
    createItem,
    getPublicItems,
    getItem,
    deleteItem,
    updateItem,
}
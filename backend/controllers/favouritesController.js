const { default: mongoose } = require('mongoose');
const favouritesService = require('../services/favourites');
const itemService = require('../services/item');

const getFavourite = async (req, res) => {
    const { userId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(userId)) {
        return res.status(404).json({error: 'Favourite does not exist'});
    }

    const favourite = await favouritesService.readByUserId(userId);

    if (!favourite) {
        return res.status(404).json({error: 'Favourite does not exist'});
    }

    const items = []

    console.log(favourite.items);

    for (const itemId of favourite.items) {
        const item = await itemService.readById(itemId);
        if (item.sold == false) {
            items.push(item);
        }
    }

    res.status(200).json(items);
}

const addtoFavourite = async (req, res) => {
    const { userId, itemId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(userId)) {
        return res.status(404).json({error: 'Favourite does not exist'});
    }
    if (!mongoose.Types.ObjectId.isValid(itemId)) {
        return res.status(404).json({error: 'Item does not exist'});
    }

    const favourite = await favouritesService.addItem(userId, itemId);

    if (!favourite) {
        return res.status(404).json({error: 'Failed to add item'});
    }
    res.status(200).json(favourite);
}

const deleteFromFavourite = async (req, res) => {
    const { userId, itemId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(userId)) {
        return res.status(404).json({error: 'Favourite does not exist'});
    }
    if (!mongoose.Types.ObjectId.isValid(itemId)) {
        return res.status(404).json({error: 'Item does not exist'});
    }

    const favourite = await favouritesService.deleteItem(userId, itemId);

    if (!favourite) {
        return res.status(404).json({error: 'Failed to delete item'});
    }
    res.status(200).json(favourite);
}

const deleteAllFromFavourite = async (req, res) => {
    const { userId } = req.params;
    if (!mongoose.Types.ObjectId.isValid(userId)) {
        return res.status(404).json({error: 'Favourite does not exist'});
    }

    const favourite = await favouritesService.removeAllItems(userId);
    
    if (!favourite) {
        return res.status(404).json({error: 'Failed to delete all'});
    }
    res.status(200).json(favourite);
}

module.exports = {
    getFavourite,
    addtoFavourite,
    deleteFromFavourite,
    deleteAllFromFavourite,
}
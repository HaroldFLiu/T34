const { Favourites } = require('../../models/favourites');
const { Item } = require('../../models/item');

const addItem = async (favId, itemId) => {

    const favourite = await Favourites.findById(favId);
    const item = await Item.findById(item);

    favourite.items.append(itemId);
    
    return favourite;
};

module.exports = { addItem };
const { Favourites } = require('../../models/favourites');
const { Item } = require('../../models/item');

const addItem = async (favId, itemId) => {

    const favourite = await Favourites.findById(favId);
    const item = await Item.findById(item);

    favourite.items.append(itemId);
    await favourite.save();
    return favourite;
};

const deleteItem = async (favId, itemId) => {
    const favourite = await Favourites.findById(favId);  
    const item = await Item.findById(itemId)

    const tempItems = [];

    for (let i =0 ; i < favourite.items.length(); i++) {
        if (favourite.items[i] != itemID) {
             tempItems.append(favourites.items[i]);
        }
    }
    favourite.items = tempItems;
    await favourite.save();
    return favourite;

};

const removeAllItems = async (favId) => {
    const favourite = await Favourites.findById(favId);

    favourite.items = [];
    await favourite.save();
    return favourite; 
};

module.exports = { addItem, deleteItem, removeAllItems};
const { Cart } = require('../../models/cart');
const { Favourites } = require('../../models/favourites');
const { Item } = require('../../models/item');

const deleteItem = async (favId, itemID) => {
    const favourite = await Favourites.findById(favId);  

    const tempItems = [];

    for (let i =0 ; i < favourite.items.length(); i++) {
        if (favourite.items[i] != itemID) {
             tempItems.append(favourites.items[i]);
        }
    }
    favourite.items = tempItems;
    return favourite;

}

const removeAll = async (favId) => {
    const favourite = await Favourites.findById(favId);

    favourite.items = [];
    return favourite; 
}

module.exports = { deleteItem, removeAll };
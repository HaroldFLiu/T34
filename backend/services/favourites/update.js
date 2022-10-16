const { Favourites } = require('../../models/favourites');
const { Item } = require('../../models/item');
const favouriteService = require('./read');

const addItem = async (userId, itemId) => {
    const favourite = await favouriteService.readByUserId(userId);

    favourite.items.push(itemId);

    await favourite.save();

    return favourite;
};

const deleteItem = async (userId, itemId) => {
    const favourite = await favouriteService.readByUserId(userId);  

    favourite.items = favourite.items.filter((x) => (JSON.stringify(x._id) != JSON.stringify(itemId)));

    await favourite.save();

    return favourite;
};

const removeAllItems = async (userId) => {
    const favourite = await favouriteService.readByUserId(userId);

    favourite.items = [];

    await favourite.save();

    return favourite; 
};

const updateByUserId = async (userId, props) => {
    const fav = await favouriteService.readByUserId(userId);
  
    if (!fav) {
      console.log(`Cannot find favourites with user ID: ${userId}`);
      return undefined;
    }
  
    for (const property in props) {
      if (property != 'user') {
        fav[property] = props[property];
      }
    }
  
    await fav.save();
  
    return fav;
  };

module.exports = { addItem, deleteItem, removeAllItems, updateByUserId };
const { Favourites } = require('../../models/favourites')

const readById = async (favId) => {
    const favourite = await Favourites.findById(favId);
    if (favourite.items.length == 0) {
        console.log("Favourites is empty");
    }
    return favourite;
};

module.exports = { readById };
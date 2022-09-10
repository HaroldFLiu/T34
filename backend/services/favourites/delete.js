
const { Favourites } = require('../../models/favourites');
const { Item } = require('../../models/item');

const deleteById = async(favId) => {
    const deletedFav = await Favourites.findByIdAndDelete(favId);
    return deletedFav;
};

module.exports = { deleteById };
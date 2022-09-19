const { Favourites } = require('../../models/favourites');
const { User } = require('../../models/user');

const create = async (userId) => {
    const favourites = await Favourites.create(userId);
    return favourites;
};

module.exports = { create };
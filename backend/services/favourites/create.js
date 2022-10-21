const { Favourites } = require('../../models/favourites');
const { User } = require('../../models/user');

// always tie favourites to a user, and user can only have one favourite
const create = async (userId) => {
    const favourites = await Favourites.create(userId);
    return favourites;
};

module.exports = { create };
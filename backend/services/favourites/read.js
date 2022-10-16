const { Favourites } = require('../../models/favourites')

const { isNilOrEmpty } = require('ramda-adjunct');
const { isMongoId } = require('validator');

const readById = async (favId) => {
    if (!isMongoId(`${favId}`)) {
        console.log(`Fav ID: ${favId} is not a valid MongoID`);
        return undefined;
    }

    const favourite = await Favourites.findById(favId);

    if (favourite.items.length == 0) {
        console.log("Favourites is empty");
    }

    return favourite;
};

const readByUserId = async (userId) => {
    if (!isMongoId(`${userId}`)) {
        console.log(`User ID: ${userId} is not a valid MongoID`);
        return undefined;
    }

    const favs = await readAll();

    const fav = favs.filter((x) => (JSON.stringify(x.user) == JSON.stringify(userId)))[0];

    return fav;
};

const readAll = async () => {
    const favs = await Favourites.find();

    return favs
}

module.exports = { readById, readByUserId, readAll };
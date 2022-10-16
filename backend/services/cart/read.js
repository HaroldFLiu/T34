const { Cart } = require('../../models/cart')

const { isNilOrEmpty } = require('ramda-adjunct');
const { isMongoId } = require('validator');

const readById = async (cartId) => {
    if (!isMongoId(`${cartId}`)) {
        console.log(`Cart ID: ${cartId} is not a valid MongoID`);
        return undefined;
    }
    
    const cart = await Cart.findById(cartId);
    
    if (isNilOrEmpty(cart)) {
        console.log(`Cannot find cart with id: ${cartId}`);
    }
    
    return cart;
}

const readByUserId = async (userId) => {
    const carts = await readAll();
    //console.log(carts);

    if (!isMongoId(`${userId}`)) {
        console.log(`Cart ID: ${userId} is not a valid MongoID`);
    }

    const cart = carts.filter((x) => (JSON.stringify(x.user) == JSON.stringify(userId)))[0];
    //console.log(cart);

    if (!cart) {
        console.log(`Cart does not exist`);
    }

    return cart;
};

const readAll = async () => {
    const carts = await Cart.find();
    return carts;
}

module.exports = {
    readAll,
    readByUserId,
    readById,
};
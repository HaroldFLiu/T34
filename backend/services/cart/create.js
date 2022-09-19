const { Cart } = require('../../models/cart')


const create = async (userId) => {
    const cart = await Cart.create(userId);
    return cart;
};


module.exports = { create };
const { Cart } = require('../../models/cart')

// always tie cart to a user, and user only has one cart
const create = async (userId) => {
    const cart = await Cart.create(userId);
    return cart;
};

module.exports = { create };
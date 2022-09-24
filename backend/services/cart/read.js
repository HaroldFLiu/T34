const { Cart } = require('../../models/cart')


const readById = async (cartId) => {
    const cart = await Cart.findById(cartId);
    return cart;
};


module.exports = {readById};
const { Cart } = require('../../models/cart')

const deleteById = async (cartId) => {
    const deletedCart = await Cart.findByIdAndDelete(cartId);
    return deletedCart;
}

const deleteByUserId = async (userId) => {
    const carts = await Cart.find();
    const cart = carts.filter((x) => (x.userId == userId));

    const deletedCart = await Cart.findByIdAndDelete(cart._id);
    return deletedCart;
}

module.exports = { 
    deleteById,
    deleteByUserId,
};
const { Cart } = require('../../models/cart')
const { Item } = require('../../models/item');


const deleteById = async (cartId) => {
    const deletedCart = await Cart.findByIdAndDelete(cartId);
    return deletedCart;

}
module.exports = { deleteById};
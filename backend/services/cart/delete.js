const { Cart } = require('../../models/cart')
const { Item } = require('../../models/item');

const deleteItem = async(cartId, itemId) => {
    const cart = await Cart.findById(cartId);
    const item = await Item.findById(itemId);
    const tempItems = [];
    for (let i = 0; i < cart.items.length(); i++) {
        if (cart.items[i] != itemId) {
            temp.append(cart.items[i]);
        }
        else {
            cart.subtotal -= item.price;
        }
    }
    cart.items = tempItems;
    return cart;
}

const removeAll = async(cartID) => {
    const cart = await Cart.findById(cartId);
    cart.items = [];
    cart.subtotal = 0.00;
    return cart;
}

module.exports = { deleteItem, removeAll};
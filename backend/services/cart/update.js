const { Cart } = require('../../models/cart')
const { Item } = require('../../models/item');

const addItem = async(cartId, itemId, quantity) => {
      const item = await Item.findById(itemId);
      const cart = await Cart.findById(cartId);
      for (let i = 0; i < quantity; i++) {
        cart.items.append(itemId);
        cart.subtotal += item.price;
      }
      
      return cart;

};

const checkout = async(cartId) => {
  const cart = await Cart.findById(cartID);
  cart.items = [];
  cart.subtotal = 0.00;
  return cart;
}

module.exports = {addItem, checkout};




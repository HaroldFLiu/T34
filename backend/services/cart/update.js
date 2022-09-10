const { Cart } = require('../../models/cart')
const { Item } = require('../../models/item');

const addItem = async(cartId, itemId, quantity) => {
      const item = await Item.findById(itemId);
      const cart = await Cart.findById(cartId);
      for (let i = 0; i < quantity; i++) {
        cart.items.append(itemId);
        cart.subtotal += item.price;
      }
      await cart.save();
      
      return cart;

};

const checkout = async(cartId) => {
  const cart = await Cart.findById(cartID);
  cart.items = [];
  cart.subtotal = 0.00;
  await cart.save();
  return cart;

}

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
  await cart.save();
  return cart;
}

const removeAllItems = async(cartID) => {
  const cart = await Cart.findById(cartId);
  cart.items = [];
  cart.subtotal = 0.00;
  await cart.save();
  return cart;
}

module.exports = {addItem, checkout, deleteItem, removeAllItems};




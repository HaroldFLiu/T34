const { otherwise } = require('ramda');
const { Cart } = require('../../models/cart')
const { Item } = require('../../models/item');
const itemService = require('../item');

const addItem = async(cartId, itemId, quantity) => {
  const item = await itemService.readById(itemId);
  
  const cart = await Cart.findById(cartId);
  for (let i = 0; i < quantity; i++) {
    cart.items.push(itemId);
    cart.subtotal += item.price;
  }
  await cart.save();
  
  return cart;

};

const checkout = async(cartId) => {
  const cart = await Cart.findById(cartId);
  for (let i = 0; i < cart.items.length; i++) {
    const item = await Item.findbnyId(cart.items[i]);
    item.sold == true;
    await item.save();
  }
  cart.items = [];
  cart.subtotal = 0.00;
  await cart.save();
  
  return cart;

}

const deleteItem = async(cartId, itemId) => {
  const cart = await Cart.findById(cartId);
  const item = await Item.findById(itemId);
  const tempItems = [];
  let count = 0;
  for (let i = 0; i < cart.items.length; i++) {
      if (!cart.items[i].equals(itemId)) {
          tempItems.push(cart.items[i]);
      }
      else {
        if (count == 0) {
          cart.subtotal -= item.price;
          count ++;
        }
        else {
          tempItems.push(cart.items[i]);
        }
      }
  }
  cart.items = tempItems;
  
  await cart.save();
  return cart;
}

const removeAllItems = async(cartId) => {
  const cart = await Cart.findById(cartId);
  cart.items = [];
  cart.subtotal = 0.00;
  await cart.save();
  return cart;
}

module.exports = {addItem, checkout, deleteItem, removeAllItems};




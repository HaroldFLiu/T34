const { otherwise } = require('ramda');
const { Cart } = require('../../models/cart')
const itemService = require('../item');
const cartService = require('./read');

const addItem = async(userId, itemId) => {
  const item = await itemService.readById(itemId);
  const cart = await cartService.readByUserId(userId);
  
  cart.items.push(itemId);
  cart.subtotal += item.price;

  await cart.save();
  
  return cart;
};

const checkout = async(userId) => {
  const cart = await cartService.readByUserId(userId);

  for (let i = 0; i < cart.items.length; i++) {
    const item = await itemService.readById(cart.items[i]);
    item.sold = true;
    await item.save();
  }

  cart.items = [];
  cart.subtotal = 0.00;
  await cart.save();
  
  return cart;
}

const deleteItem = async(userId, itemId) => {
  const cart = await cartService.readByUserId(userId);
  const item = await itemService.readById(itemId);

  //const tempItems = [];
  //let count = 0;

  cart.items = cart.items.filter((x) => (JSON.stringify(x._id) != JSON.stringify(itemId)));
  cart.subtotal -= item.price;
  
  await cart.save();
  return cart;
}

const removeAllItems = async(userId) => {
  const cart = await cartService.readByUserId(userId);
  cart.items = [];
  cart.subtotal = 0.00;
  await cart.save();
  return cart;
}

const updateByUserId = async (userId, props) => {
  const cart = await cartService.readByUserId(userId);

  if (!cart) {
    console.log(`Cannot find cart with user ID: ${userId}`);
    return undefined;
  }

  for (const property in props) {
    if (property != 'user') {
      cart[property] = props[property];
    }
  }

  await cart.save();

  return cart;
};

module.exports = {addItem, checkout, deleteItem, removeAllItems, updateByUserId};




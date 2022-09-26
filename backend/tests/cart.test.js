const mongoose = require('mongoose');
require('dotenv').config();
const { Item } = require('../models/item');
const { Cart } = require('../models/cart');
const { User } = require('../models/user');

const itemService = require('../services/item');
const cartService = require('../services/cart');
const userService = require('../services/user');

describe('CartService', () => {
  let connection = null;

  let cart = null;
  let cartInfo = null;

  let item1 = null;
  let item1Info = null;

  let item2 = null;
  let item2Info = null;

  let user1 = null;
  let user1Info = {
    first_name: "Sue",
    last_name: "Green",
    email: "fds@spacewax.com",
    password: "magna",
  }

  let user2 = null;
  let user2Info = {
    first_name: "Joanna",
    last_name: "Xue",
    email: "awef@spacewax.com",
    password: "magna",
  }

  beforeAll(async () => {
    connection = mongoose.connect(process.env.MONGO_URI);
    await Cart.deleteMany({});
    await Item.deleteMany({});
    await User.deleteMany({});

    user1 = await userService.create(user1Info);
    user2 = await userService.create(user2Info);

    item1Info = {
      name: "Chair",
      description: "Sturdy",
      price: 300,
      group_ids: [],
      category_ids: [],
      public_visibility: true,
      seller_id: user2._id,
    }

    item2Info = {
      name: 'Apple',
      description: 'Crunchy',
      price: 5,
      category_ids: [],
      group_ids: [],
      public_visibility: true,
      seller_id: user2._id,
    }

    item1 = await itemService.create(item1Info);
    item2 = await itemService.create(item2Info);
  });

  afterAll(async () => {
      await mongoose.disconnect();
  });

  test('Create Cart', async () => {
    cartInfo = {
      user: user1._id,
    }
    cart = await cartService.create(cartInfo)
    const cartdb = await Cart.findById(cart._id);

    expect(cart).not.toBeNull();
    expect(cartdb).not.toBeNull();
    expect(cartdb.user.toString()).toBe(cartInfo.user.toString());
    expect(cartdb.subtotal).toBe(0);
  
  });

  test('Read by cartId', async () => {
    const cartRead = await cartService.readById(cart._id);
    const cartdb = await Cart.findById(cart._id);

    expect(cartRead).not.toBeNull();
    expect(cartdb).not.toBeNull();
    expect(cartdb.items.length).toBe(0);
    expect(cartdb.subtotal).toBe(0);
  });


  test('Delete Cart', async () => {
    const deletedCart = await cartService.deleteById(cart._id);
    expect(await Cart.findById(cart._id).toBeNull);
  });


  test('Add item1 to cart', async () => {
    cart = await cartService.create(cartInfo);

    await cartService.addItem(cart._id, item1._id, 1);
    const cartdb = await Cart.findById(cart._id);

    expect(cartdb).not.toBeNull();
    expect(cartdb.items.length).toBe(1);
    expect(cartdb.subtotal).toBe(item1Info.price);
  });

  test('Delete an item1 from cart', async () => {
    await cartService.deleteItem(cart._id, item1._id);
    const cartdb = await Cart.findById(cart._id);

    expect(cartdb).not.toBeNull();
    expect(cartdb.items.length).toBe(0);
    expect(cartdb.subtotal).toBe(0);
  });

  test('Delete all items from cart', async () => {
    await cartService.addItem(cart._id, item1._id, 1);
    await cartService.addItem(cart._id, item2._id, 1);

    await cartService.removeAllItems(cart._id);
    const cartdb = await Cart.findById(cart._id);

    expect(cartdb).not.toBeNull();
    expect(cartdb.items.length).toBe(0);
    expect(cartdb.subtotal).toBe(0);
  });
  
  test('Checkout items from cart', async () => {
    await cartService.addItem(cart._id, item1._id, 1);
    await cartService.addItem(cart._id, item2._id, 1);

    expect(cart.subtotal).toBe(item1Info.price + item2Info.price);

    await cartService.checkout(cart._id);

    const cartdb = await Cart.findById(cart._id);
    expect(cartdb).not.toBeNull;
    expect(cartdb.items.length).toBe(0);
    expect(cartdb.subtotal).toBe(0);
  });
});
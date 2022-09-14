const mongoose = require('mongoose');
require('dotenv').config();
const { Item } = require('../models/item');
const { Cart } = require('../models/cart');
const { User } = require('../models/user');

const itemService = require('../services/item');
const cartService = require('../services/cart');

describe('CartService', () => {
    let connection = null;
    let item1 = null;
    let item1Info = null;
    let item2 = null;
    let item2Info = null;
    let item_ids = null;
    let cart1 = null;
    let cart1Info = null;
    let user1 = null;
    let user1Info = null;


    beforeAll(async () => {
        connection = mongoose.connect(process.env.MONGO_URI);
    });

    afterAll(async () => {
        await Cart.deleteMany({});
        await mongoose.disconnect();
      });

      test('Create Cart', async () => {
        user1Info = {
          first_name: 'Michael',
          last_name: 'Xie',
          email: 'micxie@student.unimelb.edu.au',
          password: 'password1234',
          groups: [],
        }
        user1 = await new User(user1Info);
        cart1Info = {
          user: user1._id,
        }
        await cartService.create(cart1Info)
        const cart1db = await Cart.findById(cart1._id);

        expect(cart1).not.toBeNull();
        expect(cart1db).not.toBeNull();
        expect(cart1db.user).toBe(cart1Info.user);
        expect(cart1db.subtotal).toBe(0);
      
      });


      test('Delete Cart', async () => {
        cart1 = await cartService.create(cart1Info);
        const deletedCart1 = await cartService.deleteById(cart1._id);
        expect(await Item.findById(cart1._id).toBeNull);
      });


      test('Add item to cart', async () => {
        cart1 = await cartService.create(cart1Info);
        

        item1Info = {
          name: 'Chair',
          description: 'This is a good chair.',
          price: 100,
          group_ids: [],
          public_visibility: true,
          // seller: ,
        }
    
        item1 = await itemService.create(item1Info);
        item_ids.append(item1._id);
        await cartService.addItem(cart1._id, item1._id, 1);
        cart1db = await Cart.findById(cart1._id);

        expect(cart1db).not.toBeNull();
        expect(item1).not.toBeNull();
        expect(cart1db.items).tobe(item_ids);
        expect(cart1db.subtotal).tobe(item1Info.price);
      });

      test('Delete an item from cart', async () => {
        cart1 = await cartService.create(cart1Info);
        item2Info = {
          name: 'Apple',
          description: 'Crunchy',
          price: 5,
          group_ids: [],
          public_visibility: true,

        }
        item2 = await itemService.create(item2Info);
        await cartService.addItem(cart1._id, item2._id, 1);
        await cartService.addItem(cart1._id, item1._id, 1);
        await cartService.deleteItem(cart1._id, item1._id);
        const cart1db = await Cart.findById(cart1._id);
        item_ids.append(item2._id);
        item_ids.shift();

        expect(item2).not.toBeNull();
        expect(cart1db).not.toBeNull();
        expect(cart1db.items).tobe(item_ids);
        expect(cart1db.subtotal).tobe(item2Info.price);

      });

      test('Delete all items from cart', async () => {
        cart1 = await cartService.create(cart1Info);
        await cartService.addItem(cart1._id, item1._id, 1);
        await cartService.addItem(cart1._id, item2._id, 1);
        item_ids.append(item1._id);
        await cartService.removeAllItems(cart1._id);
        const cart1db = await Cart.findById(cart1._id);
        item_ids = [];
        expect(cart1db).not.toBeNull();
        expect(cart1db.items).tobe(item_ids);
        expect(cart1db.subtotal).tobe(0);
      })

      test('Checkout items from cart', async () => {
        cart1 = await cartService.create(cart1Info);
        await cartService.addItem(cart1._id, item1._id, 1);
        await cartService.addItem(cart1._id, item2._id, 1);
        item_ids = [];
        await cartService.checkout(cart1._id);
        const cart1db = await Cart.findById(cart1._id);
        expect(cart1db).not.toBeNull;
        expect(cart1db.items).tobe(item_ids);
        expect(cart1db,subtotal).tobe(0);
      });


});
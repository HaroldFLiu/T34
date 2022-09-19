const mongoose = require('mongoose');
require('dotenv').config();
const { Item } = require('../models/item');
const { Cart } = require('../models/cart');
const user = require('../models/user');

const itemService = require('../services/item');
const cartService = require('../services/cart');

describe('CartService', () => {
    let connection = null;
    let item_ids = null;
    let item1 = null;
    let item1Info = null;
    let item2 = null;
    let item2Info = null;
    let cart1 = null;
    let cart1Info = null;
    let user1 = null;


    beforeAll(async () => {
        connection = mongoose.connect(process.env.MONGO_URI);
    });

    afterAll(async () => {
        await Cart.deleteMany({});
        await Item.deleteMany({});
        await mongoose.disconnect();
      });
    

      test('Create Cart', async () => {
        user1 = await user.findOne({email:'micxie@student.unimelb.edu.au'});
        cart1Info = {
          user: user1._id,
        }
        cart1 = await cartService.create(cart1Info)
        const cart1db = await Cart.findById(cart1._id);

        expect(cart1).not.toBeNull();
        expect(cart1db).not.toBeNull();
        //expect(cart1db.user).toBe(cart1Info.user);
        expect(cart1db.subtotal).toBe(0);
      
      });

      test('Read by cartId', async () => {
        item1Info = {
          name: 'Chair',
          description: 'This is a good chair.',
          price: 100,
          category_ids: [],
          group_ids: [],
          public_visibility: true,

        }
        item1 = await itemService.create(item1Info);

        item2Info = {
          name: 'Apple',
          description: 'Crunchy',
          price: 5,
          category_ids: [],
          group_ids: [],
          public_visibility: true,

        }
        item2 = await itemService.create(item2Info);
        await cartService.addItem(cart1._id, item1._id, 1);
        await cartService.addItem(cart1._id, item2._id, 1);
        item_ids = [item1._id, item2._id];
        const cart1read = await cartService.readById(cart1._id);
        expect(cart1read).not.toBeNull;
        expect(cart1read.items).toStrictEqual(item_ids);
        expect(cart1read.subtotal).toBe(item1Info.price+item2Info.price);
      });


      test('Delete Cart', async () => {
        
        const deletedCart1 = await cartService.deleteById(cart1._id);
        expect(await Cart.findById(cart1._id).toBeNull);
      });


      test('Add item to cart', async () => {
        cart1 = await cartService.create(cart1Info);
        item_ids = [item1._id];;
        await cartService.addItem(cart1._id, item1._id, 1);
        const cart1db = await Cart.findById(cart1._id);

        expect(cart1db).not.toBeNull();
        expect(cart1db.items).toStrictEqual(item_ids);
        expect(cart1db.subtotal).toBe(item1Info.price);
      });

      test('Delete an item from cart', async () => {
        
        await cartService.deleteItem(cart1._id, item1._id);
        const cart1db = await Cart.findById(cart1._id);
        item_ids = [];
        expect(cart1db).not.toBeNull();
        expect(cart1db.items).toStrictEqual(item_ids);
        expect(cart1db.subtotal).toBe(0);

      });

      test('Delete all items from cart', async () => {
        item1Info = {
          name: 'Chair',
          description: 'This is a good chair.',
          price: 100,
          category_ids: [],
          group_ids: [],
          public_visibility: true,

        }
        item1 = await itemService.create(item1Info);

        item2Info = {
          name: 'Apple',
          description: 'Crunchy',
          price: 5,
          category_ids: [],
          group_ids: [],
          public_visibility: true,

        }
        item2 = await itemService.create(item2Info);
        await cartService.addItem(cart1._id, item1._id, 1);
        await cartService.addItem(cart1._id, item2._id, 1);
        await cartService.removeAllItems(cart1._id);
        const cart1db = await Cart.findById(cart1._id);
        item_ids = [];
        expect(cart1db).not.toBeNull();
        expect(cart1db.items).toStrictEqual(item_ids);
        expect(cart1db.subtotal).toBe(0);
      });
      
      test('Checkout items from cart', async () => {
        item1Info = {
          name: 'Chair',
          description: 'This is a good chair.',
          price: 100,
          category_ids: [],
          group_ids: [],
          public_visibility: true,

        }
        item1 = await itemService.create(item1Info);

        item2Info = {
          name: 'Apple',
          description: 'Crunchy',
          price: 5,
          category_ids: [],
          group_ids: [],
          public_visibility: true,

        }
        item2 = await itemService.create(item2Info);
        await cartService.addItem(cart1._id, item1._id, 1);
        await cartService.addItem(cart1._id, item2._id, 1);
        item_ids = [];
        await cartService.checkout(cart1._id);
        const cart1db = await Cart.findById(cart1._id);
        expect(cart1db).not.toBeNull;
        expect(cart1db.items).toStrictEqual(item_ids);
        expect(cart1db.subtotal).toBe(0);
      });
      

      


});
const mongoose = require('mongoose');
require('dotenv').config();
const { Item } = require('../models/item');
const { Favourites } = require('../models/favourites');
const user = require('../models/user');

const itemService = require('../services/item');
const favouritesService = require('../services/favourites');

describe('FavouritesService', () => {
    let connection = null;
    let item_ids = null;
    let item1 = null;
    let item1Info = null;
    let item2 = null;
    let item2Info = null;
    let fav1 = null;
    let fav1Info = null;
    let user1 = null;

    beforeAll(async () => {
        connection = mongoose.connect(process.env.MONGO_URI);
    });

    afterAll(async () => {
        await Favourites.deleteMany({});
        await Item.deleteMany({});
        await mongoose.disconnect();
      });

      test('Create Favourites', async () => {
        user1 = await user.findOne({email:'micxie@student.unimelb.edu.au'});
        fav1Info = {
          user: user1._id,
        }
        fav1 = await favouritesService.create(fav1Info)
        const fav1db = await Favourites.findById(fav1._id);

        expect(fav1).not.toBeNull();
        expect(fav1db).not.toBeNull();
        expect(fav1db.user).toStrictEqual(fav1Info.user);
      
      });

      test('Read by favId', async () => {
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
        await favouritesService.addItem(fav1._id, item1._id, 1);
        await favouritesService.addItem(fav1._id, item2._id, 1);
        item_ids = [item1._id, item2._id];
        const fav1read = await favouritesService.readById(fav1._id);
        expect(fav1read).not.toBeNull;
        expect(fav1read.items).toStrictEqual(item_ids);
        
      });
      
      test('Delete Favourite', async () => {
        const deletedFavourite1 = await favouritesService.deleteById(fav1._id);
        expect(await Favourites.findById(fav1._id).toBeNull);
      });


      test('Add item to favourites', async () => {
        fav1 = await favouritesService.create(fav1Info);
        item_ids = [item1._id];;
        await favouritesService.addItem(fav1._id, item1._id, 1);
        const fav1db = await Favourites.findById(fav1._id);

        expect(fav1db).not.toBeNull();
        expect(fav1db.items).toStrictEqual(item_ids);
      });

      test('Delete an item from favourites', async () => {
        
        await favouritesService.deleteItem(fav1._id, item1._id);
        const fav1db = await Favourites.findById(fav1._id);
        item_ids = [];
        expect(fav1db).not.toBeNull();
        expect(fav1db.items).toStrictEqual(item_ids);

      });

      test('Delete all items from favourites', async () => {

        await favouritesService.addItem(fav1._id, item1._id, 1);
        await favouritesService.addItem(fav1._id, item2._id, 1);
        await favouritesService.removeAllItems(fav1._id);
        const fav1db = await Favourites.findById(fav1._id);
        item_ids = [];
        expect(fav1db).not.toBeNull();
        expect(fav1db.items).toStrictEqual(item_ids);
      });

});
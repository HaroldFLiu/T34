const mongoose = require('mongoose');
require('dotenv').config();
const { Item } = require('../models/item');
const { Favourites } = require('../models/favourites');
const { User } = require('../models/user');

const itemService = require('../services/item');
const favouritesService = require('../services/favourites');
const userService = require('../services/user');

describe('FavouritesService', () => {
  let connection = null;

  let item1 = null;
  let item1Info = null;

  let item2 = null;
  let item2Info = null;

  let fav = null;
  let favInfo = null;

  let user1 = null;
  let user1Info = {
    first_name: "Sue",
    last_name: "Green",
    email: "34324234@spacewax.com",
    password: "magna",
  }

  let user2 = null;
  let user2Info = {
    first_name: "Joanna",
    last_name: "Xue",
    email: "354234@spacewax.com",
    password: "magna",
  }

  beforeAll(async () => {
    connection = mongoose.connect(process.env.MONGO_URI);
    await Favourites.deleteMany({});
    await Item.deleteMany({});
    await User.deleteMany({});

    user1 = await userService.create(user1Info);
    user2 = await userService.create(user2Info);

    item1Info = {
      name: "Chair",
      description: "Sturdy",
      price: 300,
      public_visibility: true,
      seller_id: user2._id,
    }

    item2Info = {
      name: "Table",
      description: "Big",
      price: 4239,
      public_visibility: true,
      seller_id: user2._id,
    }

    item1 = await itemService.create(item1Info);
    item2 = await itemService.create(item2Info);
  });

  afterAll(async () => {
    await Favourites.deleteMany({});
    await Item.deleteMany({});
    await User.deleteMany({});
    await mongoose.disconnect();
  });

  test('Create Favourites', async () => {
    favInfo = {
      user: user1._id,
    }
    fav = await favouritesService.create(favInfo)
    const favdb = await Favourites.findById(fav._id);

    expect(fav).not.toBeNull();
    expect(favdb).not.toBeNull();
    expect(favdb.user).toStrictEqual(favInfo.user);
  
  });

  test('Read by favId', async () => {
    await favouritesService.addItem(fav._id, item1._id, 1);
    await favouritesService.addItem(fav._id, item2._id, 1);

    const favRead = await favouritesService.readById(fav._id);
    expect(favRead).not.toBeNull();
    expect(favRead.items.length).toBe(2);
    
  });
  
  test('Delete Favourite', async () => {
    const deletedFavourite = await favouritesService.deleteById(fav._id);
    expect(await Favourites.findById(fav._id)).toBeNull();
  });

  test('Add item to favourites', async () => {
    fav = await favouritesService.create(favInfo);
    item_ids = [item1._id];;
    await favouritesService.addItem(fav._id, item1._id, 1);
    const favdb = await Favourites.findById(fav._id);

    expect(favdb).not.toBeNull();
    expect(favdb.items).toStrictEqual(item_ids);
  });

  test('Delete an item from favourites', async () => {
    await favouritesService.deleteItem(fav._id, item1._id);
    const favdb = await Favourites.findById(fav._id);
    expect(favdb).not.toBeNull();
    expect(favdb.items.length).toBe(0);
  });

  test('Delete all items from favourites', async () => {
    await favouritesService.addItem(fav._id, item1._id, 1);
    await favouritesService.addItem(fav._id, item2._id, 1);
    await favouritesService.removeAllItems(fav._id);
    const favdb = await Favourites.findById(fav._id);

    expect(favdb).not.toBeNull();
    expect(favdb.items.length).toBe(0);
  });

});
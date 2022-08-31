const mongoose = require('mongoose');
require('dotenv').config();

const { Item } = require('../models/item');

const itemService = require('../services/item');

describe('ItemService', () => {
  let connection = null;
  let item1 = null;
  let item_1_info = null;

  beforeAll(async () => {
    connection = mongoose.connect(process.env.MONGO_URI);
  });

  afterAll(async () => {
    await mongoose.disconnect();
  });

  test('Create Item', async () => {
    item_1_info = {
      name: 'Chair',
      description: 'This is a good chair.',
      price: 100,
      // category: ,
      // seller: ,
    }

    item1 = await itemService.create(item_1_info);

    const item1db = await Item.findById(item1._id);

    expect(item1).not.toBeNull();
    expect(item1db).not.toBeNull();
    expect(item1db.name).toBe(item_1_info.name);
    expect(item1db.description).toBe(item_1_info.description);
    expect(item1db.price).toBe(item_1_info.price);
  });
})
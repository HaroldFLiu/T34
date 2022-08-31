const mongoose = require('mongoose');
require('dotenv').config();

const { Item } = require('../models/item');

const itemService = require('../services/item');

describe('ItemService', () => {
  let connection = null;
  let item1 = null;
  let item1Info = null;
  let item1UpdateInfo = null

  beforeAll(async () => {
    connection = mongoose.connect(process.env.MONGO_URI);
  });

  afterAll(async () => {
    await mongoose.disconnect();
  });

  test('Create Item', async () => {
    item1Info = {
      name: 'Chair',
      description: 'This is a good chair.',
      price: 100,
      // category: ,
      // seller: ,
    }

    item1 = await itemService.create(item1Info);
    const item1db = await Item.findById(item1._id);

    expect(item1).not.toBeNull();
    expect(item1db).not.toBeNull();
    expect(item1db.name).toBe(item1Info.name);
    expect(item1db.description).toBe(item1Info.description);
    expect(item1db.price).toBe(item1Info.price);
  });

  test('Delete Item', async () => {
    const deletedItem1 = await itemService.deleteById(item1._id);

    expect(await Item.findById(item1._id)).toBeNull();
  });

  test('Update Item information', async () => {
    item1 = await itemService.create(item1Info);

    item1UpdateInfo = {
      name: 'Table',
      description: 'This is a good table.',
      price: 150,
      // category: ,
      // seller: ,
    }

    const updatedItem1 = await itemService.updateById(item1._id, item1UpdateInfo);
    const updatedItem1db = await Item.findById(item1._id);
    console.log('UPDATE\n');
    console.log(updatedItem1db);

    expect(item1).not.toBeNull();
    expect(updatedItem1).not.toBeNull();
    expect(updatedItem1db).not.toBeNull();
    expect(updatedItem1db.name).toBe(item1UpdateInfo.name);
    expect(updatedItem1db.description).toBe(item1UpdateInfo.description);
    expect(updatedItem1db.price).toBe(item1UpdateInfo.price);
  });

  test('Read One Item', async () => {
    const item = await itemService.readById(item1._id);

    const itemdb = await Item.findById(item1._id);

    expect(item).not.toBeNull();
    expect(itemdb).not.toBeNull();

    console.log('READ ONE\n');
    console.log(itemdb);
  });
})
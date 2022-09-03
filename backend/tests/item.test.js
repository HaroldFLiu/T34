const mongoose = require('mongoose');
require('dotenv').config();

const { Item } = require('../models/item');
const { Category } = require('../models/category');

const itemService = require('../services/item');
const categoryService = require('../services/category');

describe('ItemService', () => {
  let connection = null;
  let item1 = null;
  let item1Info = null;
  let item1UpdateInfo = null
  let item2 = null;
  let item2Info = null;
  let item3 = null;
  let item3Info = null;
  let category1 = null;
  let category2 = null;
  let category1Info = null;
  let category2Info = null;
  let category_ids = null;

  beforeAll(async () => {
    connection = mongoose.connect(process.env.MONGO_URI);
  });

  afterAll(async () => {
    await Item.deleteMany({});
    await mongoose.disconnect();
  });

  test('Create Item', async () => {
    category1Info = {
      name : 'Furniture'
    }

    category1 = await categoryService.create(category1Info);

    item1Info = {
      name: 'Chair',
      description: 'This is a good chair.',
      price: 100,
      category_ids: [category1._id],
      // seller: ,
    }

    item1 = await itemService.create(item1Info);
    const item1db = await Item.findById(item1._id);

    expect(item1).not.toBeNull();
    expect(item1db).not.toBeNull();
    expect(item1db.name).toBe(item1Info.name);
    expect(item1db.description).toBe(item1Info.description);
    expect(item1db.price).toBe(item1Info.price);
    expect(item1db.category).toBe(item1Info.category);
  });

  test('Delete Item', async () => {
    const deletedItem1 = await itemService.deleteById(item1._id);

    expect(await Item.findById(item1._id)).toBeNull();
  });

  test('Update Item Information', async () => {
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

    expect(item1).not.toBeNull();
    expect(updatedItem1).not.toBeNull();
    expect(updatedItem1db).not.toBeNull();
    expect(updatedItem1db.name).toBe(item1UpdateInfo.name);
    expect(updatedItem1db.description).toBe(item1UpdateInfo.description);
    expect(updatedItem1db.price).toBe(item1UpdateInfo.price);
    expect(updatedItem1db.category).toBe(item1Info.category);
  });

  
  test('Add A Category', async () => {
    category2Info = {
      name : 'Fruit'
    }

    category2 = await categoryService.create(category2Info);

    category_ids = [category1._id, category2._id];

    updateditem1 = await itemService.addCategory(item1._id, category2._id);

    const updatedItem1db = await Item.findById(item1._id);

    expect(updateditem1).not.toBeNull();
    expect(updatedItem1db).not.toBeNull();
    expect(updatedItem1db).not.toBeNull();
    expect(updatedItem1db.name).toBe(item1UpdateInfo.name);
    expect(updatedItem1db.description).toBe(item1UpdateInfo.description);
    expect(updatedItem1db.price).toBe(item1UpdateInfo.price);
    expect(updatedItem1db.category_ids).toStrictEqual(category_ids);
  });


  test('Read One Item', async () => {
    const item = await itemService.readById(item1._id);

    const itemdb = await Item.findById(item1._id);

    expect(item).not.toBeNull();
    expect(itemdb).not.toBeNull();

    expect(itemdb._id).toStrictEqual(item1._id);
    expect(itemdb.name).toBe(item1UpdateInfo.name);
    expect(itemdb.description).toBe(item1UpdateInfo.description);
    expect(itemdb.price).toBe(item1UpdateInfo.price);
    expect(itemdb.category).toBe(item1Info.category);
    expect(itemdb.category_ids).toStrictEqual(category_ids);

  });

  test('Read All Items', async () => {
    const items = await itemService.readAll();

    console.log('READ ALL ITEMS');
    console.log(items);
  });
  
  test('Read By Price Ascending', async () => {
    item2Info = {
      name: 'Apple',
      description: 'Crunchy',
      price: 5,
      category_ids: [category2._id]
      // seller: ,
    }

    item3Info = {
      name: 'Banana',
      description: 'Slippery',
      price: 50,
      category_ids: [category2._id]
      // category: ,
      // seller: ,
    }

    item2 = await itemService.create(item2Info);
    item3 = await itemService.create(item3Info);

    const items = await itemService.readByPriceAsc();
    console.log('READ ASC\n');
    console.log(items);
  });

  test('Read By Price Descending', async () => {
    const items = await itemService.readByPriceDesc();
    console.log('READ DESC\n');
    console.log(items);
  });

  test('Read By Category', async () => {
    const items = await itemService.readByCategory(category1._id);
    console.log('READ BY CATEGORY\n');
    console.log(items);
  });
})
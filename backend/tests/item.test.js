const mongoose = require('mongoose');
require('dotenv').config();

const { Item } = require('../models/item');
const { Category } = require('../models/category');
const { Group } = require('../models/group');
const { User } = require('../models/user');
const { Comment } = require('../models/comment');
const { Favourites } = require('../models/favourites');
const { Cart } = require('../models/cart');

const itemService = require('../services/item');
const categoryService = require('../services/category');
const groupService = require('../services/group');
const userService = require('../services/user');

describe('ItemService', () => {
  let connection = null;
  let item = null;
  let itemInfo = null;
  let itemUpdateInfo1 = null
  let itemUpdateInfo2 = null;
  let category = null;
  let categoryInfo = {
    name: "Fruit",
  }

  let user = null;
  let userInfo = {
    first_name: "Sue",
    last_name: "Green",
    email: "1@spacewax.com",
    password: "magna",
  }

  let group = null;
  let groupInfo = null;

  jest.setTimeout(15000);

  beforeAll(async () => {
    connection = mongoose.connect(process.env.MONGO_URI_TEST);
    await Item.deleteMany({});
    await Cart.deleteMany({});
    await Comment.deleteMany({});
    await Favourites.deleteMany({});
    await Category.deleteMany({});
    await Group.deleteMany({});
    await User.deleteMany({});

    user = await userService.create(userInfo);

    groupInfo = {
      name: 'Cars',
      description: 'Cars go fast',
      members: [user._id]
    }

    group = await groupService.create(groupInfo);
    category = await categoryService.create(categoryInfo);
  });

  afterAll(async () => {
    await mongoose.disconnect();
  });

  test('Create Item', async () => {
    itemInfo = {
      name: "Chair",
      description: "Sturdy",
      price: 300,
      group_ids: [group._id],
      category_ids: [],
      public_visibility: true,
      seller_id: user._id,
    }

    item = await itemService.create(itemInfo);
    const itemdb = await Item.findById(item._id);

    expect(item).not.toBeNull();
    expect(itemdb).not.toBeNull();
    expect(itemdb.name).toBe(itemInfo.name);
    expect(itemdb.description).toBe(itemInfo.description);
    expect(itemdb.price).toBe(itemInfo.price);
    expect(itemdb.category_ids.length).toBe(itemInfo.category_ids.length);
    expect(itemdb.group_ids.length).toBe(itemInfo.group_ids.length);
    expect(itemdb.public_visibility).toBe(itemInfo.public_visibility);
    expect(itemdb.seller_id.toString()).toBe(itemInfo.seller_id.toString());
  });

  test('Delete Item', async () => {
    const deletedItem1 = await itemService.deleteById(item._id);

    expect(await Item.findById(item._id)).toBeNull();
  });

  test('Update Item Information', async () => {
    item = await itemService.create(itemInfo);

    itemUpdateInfo1 = {
      name: 'Table',
      description: 'This is a good table.',
      price: 150,
      sold: true,
    }

    const updatedItem = await itemService.updateById(item._id, itemUpdateInfo1);
    const updatedItemdb = await Item.findById(item._id);

    expect(item).not.toBeNull();
    expect(updatedItem).not.toBeNull();
    expect(updatedItemdb).not.toBeNull();
    expect(updatedItemdb.name).toBe(itemUpdateInfo1.name);
    expect(updatedItemdb.description).toBe(itemUpdateInfo1.description);
    expect(updatedItemdb.price).toBe(itemUpdateInfo1.price);
    expect(updatedItemdb.category_ids.length).toBe(itemInfo.category_ids.length);
    expect(updatedItemdb.group_ids.length).toStrictEqual(itemInfo.group_ids.length);
    expect(updatedItemdb.public_visibility).toBe(itemInfo.public_visibility);
    expect(updatedItemdb.seller_id.toString()).toBe(itemInfo.seller_id.toString());
    expect(updatedItemdb.sold).toBe(itemUpdateInfo1.sold);
  });

  test('Get Sold Items', async () => {
    const sold = await itemService.readAllSold();

    expect(sold.length).toBe(1);
  });

  test('Add A Category', async () => {
    itemUpdateInfo2 = {
      category_ids: [category._id],
    }

    updatedItem = await itemService.updateById(item._id, itemUpdateInfo2);

    const updatedItemdb = await Item.findById(item._id);

    expect(updatedItem).not.toBeNull();
    expect(updatedItemdb).not.toBeNull();
    expect(updatedItemdb.name).toBe(itemUpdateInfo1.name);
    expect(updatedItemdb.description).toBe(itemUpdateInfo1.description);
    expect(updatedItemdb.price).toBe(itemUpdateInfo1.price);
    expect(updatedItemdb.category_ids.length).toBe(itemUpdateInfo2.category_ids.length);
    expect(updatedItemdb.group_ids.length).toBe(itemInfo.group_ids.length);
    expect(updatedItemdb.public_visibility).toBe(itemInfo.public_visibility);
    expect(updatedItemdb.seller_id.toString()).toBe(itemInfo.seller_id.toString());
  });

  test('Add A Category 2', async () => {
    updatedItem = await itemService.updateById(item._id, itemUpdateInfo2);

    const updatedItemdb = await Item.findById(item._id);
  
    expect(updatedItem).not.toBeNull();
    expect(updatedItemdb).not.toBeNull();
    expect(updatedItemdb.name).toBe(itemUpdateInfo1.name);
    expect(updatedItemdb.description).toBe(itemUpdateInfo1.description);
    expect(updatedItemdb.price).toBe(itemUpdateInfo1.price);
    expect(updatedItemdb.category_ids.length).toBe(itemUpdateInfo2.category_ids.length);
    expect(updatedItemdb.group_ids.length).toBe(itemInfo.group_ids.length);
    expect(updatedItemdb.public_visibility).toBe(itemInfo.public_visibility);
    expect(updatedItemdb.seller_id.toString()).toBe(itemInfo.seller_id.toString());
  });

  test('Read One Item', async () => {
    const itemRead = await itemService.readById(item._id);

    const itemdb = await Item.findById(item._id);

    expect(itemRead).not.toBeNull();
    expect(itemdb).not.toBeNull();

    expect(itemdb.name).toBe(itemUpdateInfo1.name);
    expect(itemdb.description).toBe(itemUpdateInfo1.description);
    expect(itemdb.price).toBe(itemUpdateInfo1.price);
    expect(itemdb.category_ids.length).toBe(itemUpdateInfo2.category_ids.length);
    expect(itemdb.group_ids.length).toBe(itemInfo.group_ids.length);
    expect(itemdb.public_visibility).toBe(itemInfo.public_visibility);
    expect(itemdb.seller_id.toString()).toBe(itemInfo.seller_id.toString());
  });

  test('Read All Items', async () => {
    const items = await itemService.readAll();

    expect(items.length).toBe(1);
  });

  test('Read Public Items', async () => {
    const items = await itemService.readPublicItems();

    expect(items.length).toBe(0);
  });
  
  test('Read By Category', async () => {
    const items = await itemService.readPublicItems();
    const categoryItems = await itemService.readByCategory(category._id, items);

    expect(categoryItems.length).toBe(0);
  });

  test('Read By Group', async () => {
    const items = await itemService.readByGroup(group._id);

    expect(items.length).toBe(1);
  });

  test('Read Items By Seller', async () => {
    const items = await itemService.readItemsBySeller(user._id);

    expect(items.length).toBe(1);
  });

  test('Delete Group From Item', async () => {
    await itemService.deleteGroup(group._id);
    const itemRead = await itemService.readById(item._id);

    const itemdb = await Item.findById(item._id);
   
    expect(itemRead).not.toBeNull();
    expect(itemdb).not.toBeNull();
    expect(itemdb.group_ids.length).toBe(0);
  });
})
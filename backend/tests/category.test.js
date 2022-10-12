const mongoose = require('mongoose');
require('dotenv').config();

const { Item } = require('../models/item');
const { Category } = require('../models/category');
const { Group } = require('../models/group');
const { User } = require('../models/user');
const { Comment } = require('../models/comment');
const { Favourites } = require('../models/favourites');
const { Cart } = require('../models/cart');

const categoryService = require('../services/category');

describe('ItemService', () => {
  let connection = null;
  let category = null;
  let categoryInfo = null;

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
  });

  afterAll(async () => {
    await mongoose.disconnect();
  });

  test('Create Category', async () => {
    categoryInfo = {
      name: 'Cars',
      description: 'Cars go fast.',
    }

    category = await categoryService.create(categoryInfo);
    const categorydb = await Category.findById(category._id);

    expect(category).not.toBeNull();
    expect(categorydb).not.toBeNull();
    expect(categorydb.name).toBe(categoryInfo.name);
    expect(categorydb.description).toBe(categoryInfo.description);
  });
})

const mongoose = require('mongoose');
require('dotenv').config();

const { Category } = require('../models/category');

const categoryService = require('../services/category');

describe('ItemService', () => {
  let connection = null;
  let category = null;
  let categoryInfo = null;

  beforeAll(async () => {
    connection = mongoose.connect(process.env.MONGO_URI);
    await Category.deleteMany({});
  });

  afterAll(async () => {
    await Category.deleteMany({});
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

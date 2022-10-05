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
const commentService = require('../services/comment');
const userService = require('../services/user');

describe('CommentsService', () => {
  let connection = null;

  let item = null;
  let itemInfo = null;

  let comment1 = null;
  let comment1Info = null;

  let comment2 = null;
  let comment2Info = null;

  let user1 = null;
  let user1Info = {
    first_name: "Sue",
    last_name: "Green",
    email: "fsfwwe@spacewax.com",
    password: "magna",
  }

  let user2 = null;
  let user2Info = {
    first_name: "Joanna",
    last_name: "Xue",
    email: "fsdfewef@spacewax.com",
    password: "magna",
  }

  beforeAll(async () => {
    connection = mongoose.connect(process.env.MONGO_URI_TEST);
    await Item.deleteMany({});
    await Cart.deleteMany({});
    await Comment.deleteMany({});
    await Favourites.deleteMany({});
    await Category.deleteMany({});
    await Group.deleteMany({});
    await User.deleteMany({});

    user1 = await userService.create(user1Info);
    user2 = await userService.create(user2Info);

    itemInfo = {
      name: "Chair",
      description: "Sturdy",
      price: 300,
      public_visibility: true,
      seller_id: user2._id,
    }

    item = await itemService.create(itemInfo);
  });

  afterAll(async () => {
    await mongoose.disconnect();
  });

  test('Create Comment', async () => {
    comment1Info = {
      user: user1._id,
      content: 'This is a test comment',
      item_id: item._id,
    }

    comment1 = await commentService.create(comment1Info);
    const comment1db = await Comment.findById(comment1._id);

    const itemdb = await Item.findById(item._id);

    expect(comment1db).not.toBeNull();
    expect(comment1).not.toBeNull();
    expect(itemdb.comments.length).toBe(1);
    expect(comment1db.user).toStrictEqual(user1._id);
    expect(comment1db.content).toStrictEqual(comment1Info.content);
  });

  test('Delete Comment', async () => {
    const deletedcomment1 = await commentService.deleteById(comment1._id);
    expect(await Comment.findById(comment1._id)).toBeNull;

    const itemdb = await Item.findById(item._id);
    expect(itemdb.comments.length).toBe(0);
  });

  test('Read Comment by Item', async () => {
    comment1 = await commentService.create(comment1Info);
    const comment1db = await Comment.findById(comment1._id);

    comment2Info = {
        user: user1._id,
        content: 'This is 2nd comment',
        item_id: item._id,
    }
    comment2 = await commentService.create(comment2Info);
    const comment2db = await Comment.findById(comment2._id);

    expect(comment1db).not.toBeNull();
    expect(comment2db).not.toBeNull();

    const commentsdb = await commentService.readByItem(item._id);
    expect(commentsdb.length).toBe(2);
  });

  test('Update comment', async () => {
    const updatedString = 'This is the updated test string';
    await commentService.updateById(comment1._id, updatedString);
    const comment1db = await Comment.findById(comment1._id);

    expect(comment1db).not.toBeNull();
    expect(comment1db.content).toStrictEqual(updatedString);
  });
});
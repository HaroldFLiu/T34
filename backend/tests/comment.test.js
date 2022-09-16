const mongoose = require('mongoose');
require('dotenv').config();
const { Item } = require('../models/item');
const { Comment } = require('../models/comment');
const user = require('../models/user');

const itemService = require('../services/item');
const commentService = require('../services/comment');


describe('CommentsService', () => {
    let connection = null;
    let item1 = null;
    let item1Info = null;
    let comment1 = null;
    let comment1Info = null;
    let comment2 = null;
    let comment2Info = null;
    let user1 = null;

    beforeAll(async () => {
        connection = mongoose.connect(process.env.MONGO_URI);
    });

    afterAll(async () => {
        await Item.deleteMany({});
        await Comment.deleteMany({});
        await mongoose.disconnect();
      });

      test('Create Comment', async () => {
        user1 = await user.findOne({email:'micxie@student.unimelb.edu.au'});
        item1Info = {
            name: 'Chair',
            description: 'This is a good chair.',
            price: 100,
            category_ids: [],
            group_ids: [],
            public_visibility: true,
  
          }
          item1 = await itemService.create(item1Info);
          comment1Info = {
            itemId: item1._id,
            userId: user1._id,
            string: 'This is a test comment',
          }
        comment1 = await commentService.create(comment1Info);
        const comment1db = await Comment.findById(comment1._id);
        expect(comment1db).not.toBeNull();
        expect(comment1).not.toBeNull();
        expect(item1.comments).toBe(comment1._id);
        expect(comment1db.user).toStrictEqual(user1._id);
        expect(comment1db.content).toStrictEqual(comment1Info.content);
      });

      test('Delete Comment', async () => {
        const deletedcomment1 = await commentService.deleteById(comment1._id);
        expect(Comment.findById(comment1._id)).toBeNull();
        expect(item1.comments).toBe([]);
      });


      test('Read Comment by Item', async () => {
        comment1 = await commentService.create(comment1Info);
        comment2Info = {
            itemId: item1._id,
            userId: user1._id,
            string: 'This is 2nd comment',
        }
        comment2 = await commentService.create(comment2Info);
        const comment2db = await Comment.findById(comment2._id);
        const comment1db = await Comment.findById(comment1._id);

        expect(comment1db).not.toBeNull();
        expect(comment2db).not.toBeNull();
        const commentsdb = await commentService.readByItem(item1._id);
        expect(comentsdb).toStrictEqual([comment1, comment2]);
      });

      test('Update comment', async () => {
        const updatedString = 'This is the updated test string';
        await commentService.updateById(comment1._id, updatedString);
        const comment1db = await Comment.findById(comment1._id);

        expect(comment1db).not.toBeNull();
        expect(comment1db.content).toStrictEqual(updatedString);
      });

});
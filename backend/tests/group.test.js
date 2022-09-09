const mongoose = require('mongoose');
require('dotenv').config();

const { Group } = require('../models/group');

const groupService = require('../services/group');

describe('GroupService', () => {
  let connection = null;
  let group1 = null;
  let group1Info = null;
  let group2 = null;
  let group2Info = null;

  beforeAll(async () => {
    connection = mongoose.connect(process.env.MONGO_URI);
    console.log('Connected.');
    await Group.deleteMany({});
  });

  afterAll(async () => {
    await Group.deleteMany({});
    await mongoose.disconnect();
  });

  test('Create Group', async () => {
    group1Info = {
      name: 'Cars',
      description: 'Cars go fast',
    }

    group1 = await groupService.create(group1Info);
    const group1db = await Group.findById(group1._id);

    expect(group1).not.toBeNull();
    expect(group1db).not.toBeNull();
    expect(group1db.name).toBe(group1Info.name);
    expect(group1db.description).toBe(group1Info.description);
  });

  test('Delete Group', async () => {
    const deletedGroup1 = await groupService.deleteById(group1._id);

    expect(await Group.findById(group1._id)).toBeNull();
  });

  test('Update Group', async () => {
    group1 = await groupService.create(group1Info);

    group1UpdateInfo = {
      name: 'Table',
      description: 'This is a good table.',
    }

    const updatedGroup1 = await groupService.updateById(group1._id, group1UpdateInfo);
    const updatedGroup1db = await Group.findById(group1._id);

    expect(group1).not.toBeNull();
    expect(updatedGroup1).not.toBeNull();
    expect(updatedGroup1db).not.toBeNull();
    expect(updatedGroup1db.name).toBe(group1UpdateInfo.name);
    expect(updatedGroup1db.description).toBe(group1UpdateInfo.description);
  });

  test('Read One Group', async () => {
    const group = await groupService.readById(group1._id);

    const group1db = await Group.findById(group1._id);

    expect(group).not.toBeNull();
    expect(group1db).not.toBeNull();

    expect(group1db.name).toBe(group1UpdateInfo.name);
    expect(group1db.description).toBe(group1UpdateInfo.description);
  });

  test('Read All Groups', async () => {
    group2Info = {
        name: 'Fruit',
        description: 'Rotten',
    }

    group2 = await groupService.create(group2Info);

    const groups = await groupService.readAll();

    expect(groups.length).toBe(2);
  });
})
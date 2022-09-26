const mongoose = require('mongoose');
require('dotenv').config();

const { Item } = require('./models/item');
const { Group } = require('./models/group');
const { Category } = require('./models/category');
const { User } = require('./models/user');
const itemService = require('./services/item');
const categoryService = require('./services/category');
const groupService = require('./services/group');
const userService = require('./services/user');
const { decodeBase64 } = require('bcryptjs');

const users = [
    {
        _id: "6331501949eec5948f52c27c",
        first_name: "Sue",
        last_name: "Green",
        email: "suegreen@spacewax.com",
        password: "magna",
    }
]
const categories = [
    {
        _id: "6331519d0bfb4ef2d6699167",
        name: "Fruit",
    }
]

const groups = [
    {
        _id: "633151ed1b4cbb6c183beb8c",
        name: "Fruit sellers",
        description: "Fresh fruit",
    },
    {
        _id: "6331521059725bf0d2975715",
        name: "We sell furniture",
        description: "Bricks",
    }
]

const items = [
    {
        name: "Chair",
        description: "Sturdy",
        price: 300,
        group_ids: ["6331521059725bf0d2975715"],
        //category_ids: ["6284982aaa4c48b5c461cbd1"],
        public_visibility: true,
        seller_id: "6331501949eec5948f52c27c",
    },
    {
        name: "Apple",
        description: "Crunchy",
        price: 5,
        group_ids: ["633151ed1b4cbb6c183beb8c"],
        category_ids: ["6331519d0bfb4ef2d6699167"],
        public_visibility: false,
        seller_id: "6331501949eec5948f52c27c",
    },
    {
        name: "Banana",
        description: "Slippery",
        price: 10,
        group_ids: ["633151ed1b4cbb6c183beb8c"],
        category_ids: ["6331519d0bfb4ef2d6699167"],
        public_visibility: true,
        seller_id: "6331501949eec5948f52c27c",
    }
]

async function seed() {
    mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log('Connecting to database...');
    })
    .catch((error) => {
        console.log(error);
    });
    
    let tmp;

    await Item.deleteMany({});

    for (const user of users) {
        tmp = await userService.readById(user._id);
        if (!tmp) {
            await userService.create(user);
        }
        //console.log(user);
    }

    for (const category of categories) {
        tmp = await categoryService.readById(category._id);
        if (!tmp) {
            await categoryService.create(category);
        }
    }

    for (const group of groups) {
        tmp = await groupService.readById(group._id);
        if (!tmp) {
            await groupService.create(group);
        }
    }

    for (const item of items) {
        tmp = await itemService.readById(item._id);
        if (!tmp) {
            await itemService.create(item);
        }
    }


    mongoose.disconnect();

    console.log("Done seeding");
}

seed();

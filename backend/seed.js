const mongoose = require('mongoose');
require('dotenv').config();

const { Item } = require('./models/item');
const { Group } = require('./models/group');
const { Category } = require('./models/category');
const { User } = require('./models/user');
const { Cart } = require('./models/cart');
const { Favourites } = require('./models/favourites');
const { Comment } = require('./models/comment');

const itemService = require('./services/item');
const categoryService = require('./services/category');
const groupService = require('./services/group');
const userService = require('./services/user');
const commentService = require('./services/comment');
const cartService = require('./services/cart');
const favouritesService = require('./services/favourites');

const { decodeBase64 } = require('bcryptjs');

const users = [
    {
        _id: "633188efb8e95a5d3679d555",
        first_name: "Sue",
        last_name: "Green",
        email: "suegreen@spacewax.com",
        password: "magna",
    }
]
const categories = [
    {
        _id: "633188efb8e95a5d3679d55a",
        name: "Fruit",
    }
]

const groups = [
    {
        _id: "633188efb8e95a5d3679d55d",
        name: "Fruit sellers",
        description: "Fresh fruit",
    },
    {
        _id: "633188efb8e95a5d3679d560",
        name: "We sell furniture",
        description: "Bricks",
    }
]

const items = [
    {
        name: "Chair",
        description: "Sturdy",
        price: 300,
        group_ids: ["633188efb8e95a5d3679d560"],
        //category_ids: ["6284982aaa4c48b5c461cbd1"],
        public_visibility: true,
        seller_id: "633188efb8e95a5d3679d555",
    },
    {
        name: "Apple",
        description: "Crunchy",
        price: 5,
        group_ids: ["633188efb8e95a5d3679d55d"],
        category_ids: ["633188efb8e95a5d3679d55a"],
        public_visibility: false,
        seller_id: "633188efb8e95a5d3679d555",
    },
    {
        name: "Banana",
        description: "Slippery",
        price: 10,
        group_ids: ["633188efb8e95a5d3679d55d"],
        category_ids: ["633188efb8e95a5d3679d55a"],
        public_visibility: true,
        seller_id: "633188efb8e95a5d3679d555",
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

    for (const user of users) {
        tmp = await userService.readById(user._id);
        if (!tmp) {
            await userService.create(user);
        }
        //console.log(user);
    }

    await Item.deleteMany({});

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

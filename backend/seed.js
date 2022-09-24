const mongoose = require('mongoose');
require('dotenv').config();

const { Item } = require('./models/item');
const { Group } = require('./models/group');
const { Category } = require('./models/category');
const itemService = require('./services/item');
const categoryService = require('./services/category');
const groupService = require('./services/group');
const { decodeBase64 } = require('bcryptjs');

const categories = [
    {
        name: "Fruit"
    }
]

const items = [
    {
        name: "Chair",
        description: "Sturdy",
        price: 300,
        //category_ids: ["6284982aaa4c48b5c461cbd1"],
        public_visibility: true,
    },
    {
        name: "Apple",
        description: "Crunchy",
        price: 5,
        public_visibility: false,
    },
    {
        name: "Banana",
        description: "Slippery",
        price: 10,
        public_visibility: true,
    }
]

const groups = [
    {
        name: "Fruit sellers",
        description: "Fresh fruit",
    },
    {
        name: "We sell furniture",
        description: "Bricks",
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
    await Category.deleteMany({});
    await Group.deleteMany({});

    for (const item of items) {
        tmp = await itemService.readById(item._id);
        if (!tmp) {
            await itemService.create(item);
        }
    }

    for (const group of groups) {
        tmp = await groupService.readById(group._id);
        if (!tmp) {
            await groupService.create(group);
        }
    }

    for (const category of categories) {
        tmp = await categoryService.readById(category._id);
        if (!tmp) {
            await categoryService.create(category);
        }
    }

    mongoose.disconnect();

    console.log("Done seeding");
}

seed();

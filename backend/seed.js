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
        _id: "633a9b8d839c0bc5fe5ed317",
        name: "Vechicles",
    },
    {
        _id: "633a9a9445a6ddf458e9600b",
        name: "Apparel",
    },
    {
        _id: "633a9a9445a6ddf458e9600e",
        name: "Classified",
    },
    {
        _id: "633a9a9445a6ddf458e96011",
        name: "Electronics",
    },
    {
        _id: "633a9a9445a6ddf458e96014",
        name: "Entertainment",
    },
    {
        _id: "633a9a9445a6ddf458e96017",
        name: "Family",
    },
    {
        _id: "633a9a9445a6ddf458e9601a",
        name: "Garden & Outdoor",
    },
    {
        _id: "633a9a9545a6ddf458e9601d",
        name: "Hobbies",
    },
    {
        _id: "633a9a9545a6ddf458e96020",
        name: "Home Goods",
    },
    {
        _id: "633a9a9545a6ddf458e96023",
        name: "Home Improvement Supplies",
    },
    {
        _id: "633a9a9545a6ddf458e96026",
        name: "Musical Instruments",
    },
    {
        _id: "633a9a9545a6ddf458e96029",
        name: "Office Supplies",
    },
    {
        _id: "633a9a9545a6ddf458e9602c",
        name: "Pet Supplies",
    },
    {
        _id: "633a9a9545a6ddf458e9602f",
        name: "Sporting Goods",
    },
    {
        _id: "633a9a9545a6ddf458e96032",
        name: "Toys & Games",
    }
]

const groups = [
    {
        _id: "633188efb8e95a5d3679d55d",
        name: "Car Sellers Melbourne",
        description: "Good cars only",
    },
    {
        _id: "633188efb8e95a5d3679d560",
        name: "Fantastic Furniture",
        description: "Furniture finds in Melbourne",
    }
]

const items = [
    {
        name: "Toyota Car",
        description: "In good condition",
        price: 30000,
        group_ids: ["633188efb8e95a5d3679d55d"],
        category_ids: ["633a9b8d839c0bc5fe5ed317"],
        public_visibility: true,
        seller_id: "633188efb8e95a5d3679d555",
    },
    {
        name: "Couch",
        description: "Soft but sturdy",
        price: 500,
        group_ids: ["633188efb8e95a5d3679d560"],
        category_ids: ["633a9a9545a6ddf458e96020"],
        public_visibility: false,
        seller_id: "633188efb8e95a5d3679d555",
    },
    {
        name: "Violin",
        description: "Plays well",
        price: 100,
        group_ids: [],
        category_ids: ["633a9a9545a6ddf458e96026"],
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
        } else {
            await categoryService.updateById(category._id, category);
        }
    }

    for (const group of groups) {
        tmp = await groupService.readById(group._id);
        if (!tmp) {
            await groupService.create(group);
        } else {
            await groupService.updateById(group._id, group);
        }
    }

    for (const item of items) {
        tmp = await itemService.readById(item._id);
        if (!tmp) {
            await itemService.create(item);
        } else {
            await itemService.updateById(item._id, item);
        }
    }


    mongoose.disconnect();

    console.log("Done seeding");
}

seed();

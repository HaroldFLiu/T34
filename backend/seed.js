const mongoose = require('mongoose');
require('dotenv').config();

const { Item } = require('./models/item');
const { Group } = require('./models/group');
const { Category } = require('./models/category');
const { User } = require('./models/user');
const { Cart } = require('./models/cart');
const { Favourites } = require('./models/favourites');
const { Comment } = require('./models/comment');
const { Session } = require('./models/session');

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
        _id: "633e7c16434369b2dc9d2dab",
        first_name: "Sue",
        last_name: "Green",
        email: "test1@email.com",
        password: "test1",
    }
]
const categories = [
    {
        _id: "634527f37926a2b8c450db04",
        name: "Vechicles",
    },
    {
        _id: "634527f37926a2b8c450db07",
        name: "Apparel",
    },
    {
        _id: "634527f37926a2b8c450db0a",
        name: "Classified",
    },
    {
        _id: "634527f37926a2b8c450db0d",
        name: "Electronics",
    },
    {
        _id: "634527f37926a2b8c450db10",
        name: "Entertainment",
    },
    {
        _id: "634527f47926a2b8c450db13",
        name: "Family",
    },
    {
        _id: "634527f47926a2b8c450db16",
        name: "Garden & Outdoor",
    },
    {
        _id: "634527f47926a2b8c450db19",
        name: "Hobbies",
    },
    {
        _id: "634527f47926a2b8c450db1c",
        name: "Home Goods",
    },
    {
        _id: "634527f47926a2b8c450db1f",
        name: "Home Improvement Supplies",
    },
    {
        _id: "634527f47926a2b8c450db22",
        name: "Musical Instruments",
    },
    {
        _id: "634527f47926a2b8c450db25",
        name: "Office Supplies",
    },
    {
        _id: "634527f47926a2b8c450db28",
        name: "Pet Supplies",
    },
    {
        _id: "634527f47926a2b8c450db2b",
        name: "Sporting Goods",
    },
    {
        _id: "634527f47926a2b8c450db2e",
        name: "Toys & Games",
    }
]

const groups = [
    {
        _id: "633e7be1b5c1407aa35db545",
        name: "Car Sellers Melbourne",
        description: "Good cars only",
    },
    {
        _id: "633e7be1b5c1407aa35db548",
        name: "Fantastic Furniture",
        description: "Furniture finds in Melbourne",
    },
    {
        _id: "63450eea27e4ac5b133e4616",
        name: "Clothes",
        description: "Lovely clothes",
    }
]

const carts = [
    {
        _id: "633eea0d7d3172b98415e773",
        user: "633e7c16434369b2dc9d2dab",
        items: ["633eec982a25d4851e300c38", "633eec982a25d4851e300c3b"]
    }
]

const items = [
    {
        _id: "63452887966053d159c5512a",
        name: "Chair",
        description: "In good condition",
        price: 30000,
        group_ids: ["633e7be1b5c1407aa35db545"],
        category_ids: ["633e7be0b5c1407aa35db518"],
        public_visibility: true,
        seller_id: "633e7c16434369b2dc9d2dab",
        image_urls: ['image/download.png'],
    },
    {
        _id: "63452887966053d159c5512d",
        name: "Another Chair",
        description: "Soft but sturdy",
        price: 500,
        group_ids: ["633e7be1b5c1407aa35db548"],
        category_ids: ["633e7be1b5c1407aa35db530"],
        public_visibility: false,
        seller_id: "633e7c16434369b2dc9d2dab",
        image_urls: ['image/download.jpeg'],
    },
    {
        _id: "63452887966053d159c55130",
        name: "Violin",
        description: "Plays well",
        price: 100,
        group_ids: [],
        category_ids: ["633e7be1b5c1407aa35db536"],
        public_visibility: true,
        seller_id: "633e7c16434369b2dc9d2dab",
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
        } else {
            await userService.updateById(user._id, user);
        }
        //console.log(user);
    }

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

    for (const cart of carts) {
        tmp = await cartService.readById(cart._id);
        if (!tmp) {
            await cartService.create(cart);
        } else {
            await cartService.updateById(cart._id, cart);
        }
    }

    
    // delete other items
    const allItems = await itemService.readAll();
    const seededItems = items.map((obj) => JSON.stringify(obj._id));
    //console.log(seededItems);

    for (const item of allItems) {
        //console.log(JSON.stringify(item._id));
        if (!seededItems.includes(JSON.stringify(item._id))) {
            console.log("should not be in DB");
            await itemService.deleteById(item._id);
        }
    }

    // delete other categories
    const allCategories = await categoryService.readAll();
    const seededCategories = categories.map((obj) => JSON.stringify(obj._id));
    //console.log(seededItems);

    for (const category of allCategories) {
        //console.log(JSON.stringify(item._id));
        if (!seededCategories.includes(JSON.stringify(category._id))) {
            console.log("should not be in DB");
            await categoryService.deleteById(category._id);
        }
    }

    mongoose.disconnect();

    console.log("Done seeding");
}

seed();

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
        _id: "634c191d5f92d2c26cc0815b",
        first_name: "Sue",
        last_name: "Green",
        email: "test1@email.com",
        password: "test1",
    },
    {
        _id: "634c191d5f92d2c26cc08164",
        first_name: "Citizen",
        last_name: "John",
        email: "test@email.com",
        password: "test1",
    },
    {
        _id: "634c191e5f92d2c26cc0816d",
        first_name: "Michael",
        last_name: "Xie",
        email: "mxie@email.com",
        password: "mxie",
    },
    {
        _id: "634c191e5f92d2c26cc08176",
        first_name: "Jane",
        last_name: "Citizen",
        email: "testnew@email.com",
        password: "testnew",
    },
]

const favourites = [ 
    {
        _id: "634c191d5f92d2c26cc08161",
        user: "634c191d5f92d2c26cc0815b",
        items: ["63478fdd6ae1ffe6cfa57d3e"]
    },
    {
        _id: "634c191e5f92d2c26cc0816a",
        user: "634c191d5f92d2c26cc08164",
    },
    {
        _id: "634c191e5f92d2c26cc08173",
        user: "634c191e5f92d2c26cc0816d",
    },
    {
        _id: "634c191f5f92d2c26cc0817c",
        user: "634c191e5f92d2c26cc08176",
    },
];

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
        _id: "634527f37926a2b8c450db0d",
        name: "Electronics",
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
        _id: "634c18a6a6b466526b780d65",
        name: "Car Sellers Melbourne",
        description: "Good cars only",
        icon_url: "https://res.cloudinary.com/dvudxm6kj/image/upload/v1665634913/ilhsg3skbmxbk2lvda8w.jpg"
    },
    {
        _id: "633e7be1b5c1407aa35db548",
        name: "Fantastic Furniture",
        members: ["634c191d5f92d2c26cc0815b"],
        admins: ["634c191d5f92d2c26cc0815b"],
        description: "Furniture finds in Melbourne",
        icon_url: "https://res.cloudinary.com/dvudxm6kj/image/upload/v1665634925/acam7dmu2qo0vq8jwmwp.webp"
    },
    {
        _id: "63450eea27e4ac5b133e4616",
        name: "Clothes",
        description: "Lovely clothes",
        icon_url: "https://res.cloudinary.com/dvudxm6kj/image/upload/v1665634928/lddl0g9rzzroyg4j1nwn.jpg"
    }
]

const carts = [
    {
        _id: "634c191d5f92d2c26cc0815f",
        user: "634c191d5f92d2c26cc0815b",
        items: ["63478fdd6ae1ffe6cfa57d3e", "63478fdd6ae1ffe6cfa57d40"],
        subtotal: 41
    },
    {
        _id: "634c191e5f92d2c26cc08168",
        user: "634c191d5f92d2c26cc08164",
        items: []
    },
    {
        _id: "634c191e5f92d2c26cc08171",
        user: "634c191e5f92d2c26cc0816d",
        items: []
    },
    {
        _id: "634c191f5f92d2c26cc0817a",
        user: "634c191e5f92d2c26cc08176",
        items: []
    },
]

const items = [
    {
        _id: "63497baa9500a07fb7b96526",
        name: "Chair",
        description: "In good condition",
        price: 30000,
        group_ids: ["633e7be1b5c1407aa35db548"],
        category_ids: ["634527f47926a2b8c450db1c"],
        public_visibility: true,
        seller_id: "634c191d5f92d2c26cc0815b",
        image_urls: ['https://res.cloudinary.com/dvudxm6kj/image/upload/v1665542703/ujnojhuwpuflm4kyxcys.png'],
    },
    {
        _id: "634c18a7a6b466526b780d71",
        name: "Another Chair",
        description: "Soft but sturdy",
        price: 500,
        group_ids: ["633e7be1b5c1407aa35db548"],
        category_ids: ["634527f47926a2b8c450db1c"],
        public_visibility: true,
        seller_id: "634c191d5f92d2c26cc0815b",
        image_urls: ['https://res.cloudinary.com/dvudxm6kj/image/upload/v1665542293/ym1f9g3ny0msgkumg5tp.jpg'],
    },
    {
        _id: "63497baa9500a07fb7b9652c",
        name: "Violin",
        description: "Plays well",
        price: 100,
        group_ids: [],
        category_ids: ["634527f47926a2b8c450db22"],
        public_visibility: true,
        seller_id: "634c191d5f92d2c26cc0815b",
        image_urls: ['https://res.cloudinary.com/dvudxm6kj/image/upload/v1665542859/hhgbas44awvx3sxmixtr.jpg']
    },
    {
        _id: "63478fdd6ae1ffe6cfa57d3e",
        name: "Dino Plushie",
        description: "In good condition",
        price: 20,
        group_ids: [],
        category_ids: ["634527f47926a2b8c450db2e"],
        public_visibility: true,
        seller_id: "634c191e5f92d2c26cc08176",
        image_urls: ['https://res.cloudinary.com/dvudxm6kj/image/upload/v1665579902/xkypzqj4fr970gdvnpqh.jpg'],
    },
    {
        _id: "63478fdd6ae1ffe6cfa57d40",
        name: "Turtle Plushie",
        description: "In good condition",
        price: 21,
        group_ids: [],
        category_ids: ["634527f47926a2b8c450db2e"],
        public_visibility: true,
        seller_id: "634c191e5f92d2c26cc08176",
        image_urls: ['https://res.cloudinary.com/dvudxm6kj/image/upload/v1665579808/tznxkancxinxbin41d2l.jpg'],
    },
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
        tmp = await cartService.readByUserId(cart.user);
        if (tmp) {
            await cartService.updateByUserId(cart.user, cart);
        }
    }

    for (const fav of favourites) {
        tmp = await favouritesService.readByUserId(fav.user);
        if (tmp) {
            await favouritesService.updateByUserId(fav.user, fav);
        }
    }

    // delete other items
    const allItems = await itemService.readAll();
    const seededItems = items.map((obj) => JSON.stringify(obj._id));
    //console.log(seededItems);

    for (const item of allItems) {
        //console.log(JSON.stringify(item._id));
        if (!seededItems.includes(JSON.stringify(item._id))) {
            console.log("item should not be in DB");
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
            console.log("category should not be in DB");
            await categoryService.deleteById(category._id);
        }
    }

    // delete other groups
    const allGroups = await groupService.readAll();
    const seededGroups = groups.map((obj) => JSON.stringify(obj._id));
    //console.log(seededItems);

    for (const group of allGroups) {
        //console.log(JSON.stringify(item._id));
        if (!seededGroups.includes(JSON.stringify(group._id))) {
            console.log("group should not be in DB");
            await groupService.deleteById(group._id);
        }
    }

    // delete other users
    const allUsers = await userService.readAll();
    const seededUsers = users.map((obj) => JSON.stringify(obj._id));
    //console.log(seededItems);

    for (const user of allUsers) {
        //console.log(JSON.stringify(item._id));
        if (!seededUsers.includes(JSON.stringify(user._id))) {
            console.log("user should not be in DB");
            await userService.deleteById(user._id);
        }
    }

    mongoose.disconnect();

    console.log("Done seeding");
}

seed();

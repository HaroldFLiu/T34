const mongoose = require('mongoose');
require('dotenv').config();

const { Item } = require('./models/item');
const itemService = require('./services/item');

const items = [
    {
        name: "Chair",
        description: "Sturdy",
        price: 300,
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

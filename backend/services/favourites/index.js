const { deleteItem, removeAll } = require('./delete');
const { readById } = require('./read');
const { addItem } = require('./update');
module.exports = {
    deleteItem,
    removeAll,
    readById,
    addItem,
};
const { deleteById } = require('./delete');
const { readById, readByUserId, readAll } = require('./read');
const { addItem, deleteItem, removeAllItems } = require('./update');
const { create } = require('./create');

module.exports = {
    addItem,
    deleteItem,
    removeAllItems,
    readById,
    deleteById,
    create,
    readByUserId,
    readAll
};
const { create } = require('./create');
const { deleteById } = require('./delete');
const { readAll, readById, readByCategory } = require('./read');
const { updateById } = require('./update');

module.exports = {
  create,
  deleteById,
  readAll,
  readById,
  readByCategory,
  updateById,
};
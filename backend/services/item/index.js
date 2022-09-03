const { create } = require('./create');
const { deleteById } = require('./delete');
const { readAll, readById, readByCategory, readByPriceAsc, readByPriceDesc } = require('./read');
const { updateById, addCategory } = require('./update');

module.exports = {
  create,
  deleteById,
  readAll,
  readById,
  readByCategory,
  readByPriceAsc,
  readByPriceDesc,
  updateById,
  addCategory,
};
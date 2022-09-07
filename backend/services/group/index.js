const { create } = require('./create');
const { deleteById } = require('./delete');
const { readAll, readById } = require('./read');
const { updateById } = require('./update');

module.exports = {
  create,
  deleteById,
  readAll,
  readById,
  updateById,
};
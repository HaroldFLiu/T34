const { create } = require('./create');
const { readById, readAll, readByEmail } = require('./read');
const { updateById } = require('./update');
const { deleteById } = require('./delete');

module.exports = {
  create,
  readById,
  updateById,
  readAll,
  readByEmail,
  deleteById
};
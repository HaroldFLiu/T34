const { create } = require('./create');
const { deleteById } = require('./delete');
const { readById} = require('./read');
const { updateById } = require('./update');

module.exports = {
  create,
  deleteById,
  readById,
  updateById,
};
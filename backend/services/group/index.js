const { create } = require('./create');
const { deleteById } = require('./delete');
const { readAll, readById, readByUser, readOtherGroups, getMembership} = require('./read');
const { updateById, joinGroup, leaveGroup, addAdmin } = require('./update');

module.exports = {
  create,
  deleteById,
  readAll,
  readById,
  updateById,
  joinGroup,
  leaveGroup,
  readByUser,
  readOtherGroups,
  getMembership,
  addAdmin
};
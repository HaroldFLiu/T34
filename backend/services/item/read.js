const { isNilOrEmpty } = require('ramda-adjunct');
const { isMongoId } = require('validator');
const { Item } = require('../../models/item');

const readById = async (itemId) => {
  if (!isMongoId(`${itemId}`)) {
    return undefined;
  }
  const item = await Item.findById(itemId);

  return item;
};

const readByCategory = async (firstName) => {
  let regexp = new RegExp(firstName, 'i');
  const patients = await Patient.find({
    $or: [{ 'name.first': regexp }, { 'name.last': regexp }],
  }).exec();

  if (isNilOrEmpty(patients) || patients.length === 0) {
    logger.warn(`Cannot find patients with firstName: ${firstName}`);
    return [];
  }
  // console.log('readByFirstName:', patients);
  return patients;
};

const readAll = async () => {
  return Item.find();
};


module.exports = { readById, readAll };
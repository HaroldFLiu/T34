const { User } = require('../../models/user');

const cartService = require('../cart');
const favouriteService = require('../favourites');

const create = async ({
  first_name,
  last_name,
  email,
  password,
  groups,
  items,
}) => {
  const user = await User.create({
    first_name,
    last_name,
    email,
    password,
    groups,
    items,
  });

  const cart = await cartService.create({user:user.id});
  const fav = await favouriteService.create({user:user.id});

  return user;
};

module.exports = { create };
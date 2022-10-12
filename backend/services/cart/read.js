const { Cart } = require('../../models/cart')

const readByUserId = async (userId) => {
    const carts = await readAll();
    const cart = carts.filter((x) => (x.user == userId))[0]
  
    return cart;
};

const readAll = async () => {
    const carts = await Cart.readALl();
    return carts;
}


module.exports = {
    readAll,
    readByUserId,
};
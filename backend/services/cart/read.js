const { Cart } = require('../../models/cart')

const { isNilOrEmpty } = require('ramda-adjunct');
const { isMongoId } = require('validator');

const readById = async (cartId) => {
    if (!isMongoId(`${cartId}`)) {
        console.log(`Cart ID: ${cartId} is not a valid MongoID`);
        return undefined;
    }
    
    const cart = await Cart.findById(cartId);
    
    if (isNilOrEmpty(cart)) {
        console.log(`Cannot find cart with id: ${cartId}`);
    }
    
    return cart;
}

const readByUserId = async (userId) => {
    const carts = await readAll();
    const cart = carts.filter((x) => (x.user == userId))[0]
  
    return cart;
};

const readAll = async () => {
    const carts = await Cart.find();
    return carts;
}


module.exports = {
    readAll,
    readByUserId,
    readById,
};
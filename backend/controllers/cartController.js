const { default: mongoose } = require('mongoose');
const cartService = require('../services/cart');

const createCart = async (req, res) => {
    const { userId } = req.params;
    try {
        const cart = await cartService.create({userId});
        res.status(200).json(cart);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

const getCart = async (req, res) => {
    const { cartId } = req.params;
    if (!mongoose.isValidObjectId(cartId.toString())) {
        return res.status(404).json({error: 'Cart does not exist1'});
    }
    const cart = await cartService.readById(cartId);
    if (!cart) {
        return res.status(404).json({error: 'Cart does not exist2'});
    }
    res.status(200).json(cart)
}

//const getCartFromUser

const updateCart = async (req, res) => {
    const { cartId } = req.params;
    const { itemId, quantity } = req.body;
    if (!mongoose.Types.ObjectId.isValid(cartId)) {
        return res.status(404).json({error: 'Cart does not exist'});
    }
    if ( itemId == -1 && quantity == -1) {
        const cart = await cartService.removeAllItems(cartId);
        if (!cart) {
            return res.status(404).json({error: 'Failed to remove all items'});
        }
    }
    else {
        if (!mongoose.Types.ObjectId.isValid(itemId)) {
            return res.status(404).json({error: 'Item does not exist'});
        }
        if (quantity > 0) {
            const cart = await cartService.addItem(cartId, itemId. quantity);
            if (!cart) {
                return res.status(404).json({error: 'Failed to add item'});
            }
        }
        else if (quantity < 0) {
            const cart = await cartService.deleteItem(cartId, itemId);
            if (!cart) {
                return res.status(404).json({error: 'Failed to delete item'});
            }
        }
    }
}

const addToCart = async (req, res) => {
    const { cartId } = req.params;
    const { itemId, quantity } = req.body;
    if (!mongoose.Types.ObjectId.isValid(cartId)) {
        return res.status(404).json({error: 'Cart does not exist'});
    }
    if (!mongoose.Types.ObjectId.isValid(itemId)) {
        return res.status(404).json({error: 'Item does not exist'});
    }
    const cart = await cartService.addItem(cartId, itemId. quantity);
    if (!cart) {
        return res.status(404).json({error: 'Failed to add item'});
    }
    //res.status(200).json(cart);
}

const checkoutCart = async (req, res) => {
    const { cartId } = req.params;
    if (!mongoose.Types.ObjectId.isValid(cartId)) {
        return res.status(404).json({error: 'Cart does not exist'});
    }
    const cart = await cartService.checkout(cartId);
    if (!cart) {
        return res.status(404).json({error: 'Cart does not exist'});
    }
    //res.status(200).json(cart);
    
}
const deleteFromCart = async (req, res) => {
    const { cartId } = req.params;
    const { itemId } = req.body;
    if (!mongoose.Types.ObjectId.isValid(cartId)) {
        return res.status(404).json({error: 'Cart does not exist'});
    }
    if (!mongoose.Types.ObjectId.isValid(itemId)) {
        return res.status(404).json({error: 'Item does not exist'});
    }
    const cart = await cartService.deleteItem(cartId, itemId);
    if (!cart) {
        return res.status(404).json({error: 'Failed to delete item'});
    }
    //res.status(200).json(cart);
}

const deleteAllFromCart = async (req, res) => {
    const { cartId } = req.params;
    if (!mongoose.Types.ObjectId.isValid(cartId)) {
        return res.status(404).json({error: 'Cart does not exist'});
    }
    const cart = await cartService.removeAllItems(cartId);
    if (!cart) {
        return res.status(404).json({error: 'Failed to delete all'});
    }
    //res.status(200).json(cart);
}
const deleteCart = async (req, res) => {
    const { cartId } = req.params;
    if (!mongoose.Types.ObjectId.isValid(cartId)) {
        return res.status(404).json({error: 'Cart does not exist'});
    }
    const cart = await cartService.deletebyId(cartId);

}
module.exports = {
    createCart,
    getCart,
    updateCart,
    addToCart,
    checkoutCart,
    deleteFromCart,
    deleteAllFromCart,
    deleteCart,
}
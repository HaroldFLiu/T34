const Mongoose  = require('mongoose');
const { default: isEmail } = require('validator/lib/isEmail');
const userService = require('../services/user');
const Utils = require('../utils/utils')

const getUser = async (req, res) => {
    const { user_email } = req.params;

    if (!isEmail(user_email)) {
        return res.status(404).json({error: 'Not an email'});
    }

    const theUser = await userService.readByEmail(user_email);

    if (!theUser) {
        return res.status(404).json({error: 'User does not exist'});
    }

    res.status(200).json(theUser);
}

module.exports = {
    getUser,
}
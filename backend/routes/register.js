const express = require('express');
const bcrypt = require('bcryptjs');

const Session = require('../models/session');
const { authenticate } = require('../middleware/authenticate');
//const { csrfCheck } = require('../middleware/csrfCheck');
const { initSession, isEmail } = require('../utils/utils');
const User = require('../models/user');
const userService = require('../services/user');
//const cartService = require('../services/cart');
//const favouriteService = require('../services/favourites');

const router = express.Router();

router.post('/register', async (req, res) => {
  try {
    const {email, password, first_name, last_name } = req.body;
    if (!isEmail(email)) {
      throw new Error('Email must be a valid email address.');
    }
    if (typeof password !== 'string') {
      throw new Error('Password must be a string.');
    }
    const user = await userService.create({first_name, last_name, email, password});
    const user_id = user._id;
    const cart = await cartService.create({user:user_id});
    const favourite = await favouriteService.create({user:user_id});
  
    user.cart = cart;
    user.favourites = fav;
  
    await user.save();
    //const user = new User({ first_name:req.body.first_name, last_name:req.body.last_name, email: req.body.email, password:req.body.password});
    //const persistedUser = await user.save();
    //const userId = persistedUser._id;

    const session = await initSession(user._id);

    res
      .cookie('token', session.token, {
        httpOnly: true,
        sameSite: true,
        maxAge: 1209600000,
        secure: process.env.NODE_ENV === 'production',
      })
      .status(201)
      .json({
        title: 'User Registration Successful',
        detail: 'Successfully registered new user',
        //csrfToken: session.csrfToken,
      });
  } catch (err) {
    res.status(400).json({
      errors: [
        {
          title: 'Registration Error',
          detail: 'Something went wrong during registration process.',
          errorMessage: err.message,
        },
      ],
    });
  }
});

module.exports = router;
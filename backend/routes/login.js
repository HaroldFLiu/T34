const express = require('express');
const bcrypt = require('bcryptjs');

const Session = require('../models/session');
const { authenticate } = require('../middleware/authenticate');
const userService = require('../services/user');
const { initSession, isEmail } = require('../utils/utils');

const router = express.Router();

// POST a login
router.post('/login', async (req, res) => {
    try {
      const { email, password } = req.body;
      if (!isEmail(email)) {
        return res.status(400).json({
          errors: [
            {
              title: 'Bad Request',
              detail: 'Email must be a valid email address',
            },
          ],
        });
      }
      if (typeof password !== 'string') {
        return res.status(400).json({
          errors: [
            {
              title: 'Bad Request',
              detail: 'Password must be a string',
            },
          ],
        });
      }
      const user = await userService.readByEmail(email);
      //console.log(user);
      
      if (!user) {
        throw new Error();
      }
      const userId = user._id;
  
      const passwordValidated = await bcrypt.compare(password, user.password);
      if (!passwordValidated) {
        throw new Error();
      }
  
      const session = await initSession(userId);
  
      res
        .cookie('token', session.token, {
          sameSite: false,
          maxAge: 1209600000,
          secure: process.env.NODE_ENV === 'production',
          httpOnly:false,
        })
        .json({
          title: 'Login Successful',
          detail: 'Successfully validated user credentials',
          token: session.token,
          sameSite: false,
          maxAge: 1209600000,
          secure: process.env.NODE_ENV === 'production',
          httpOnly:false,
          //csrfToken: session.csrfToken,
        });
    } catch (err) {
      res.status(401).json({
        errors: [
          {
            title: 'Invalid Credentials',
            detail: 'Check email and password combination',
            errorMessage: err.message,
          },
        ],
      });
    }
  });

module.exports = router;

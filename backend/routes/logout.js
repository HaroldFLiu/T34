const express = require('express');
const bcrypt = require('bcryptjs');

const User = require('../models/user');
const Session = require('../models/session');
const { authenticate } = require('../middleware/authenticate');
//const { csrfCheck } = require('../middleware/csrfCheck');
const { initSession, isEmail } = require('../utils/utils');

const router = express.Router();

// PUT a logout
router.put('/logout', authenticate, async (req, res) => {
    try {
      const { session } = req;
      await session.expireToken(session.token);
      res.clearCookie('token');
  
      res.json({
        title: 'Logout Successful',
        detail: 'Successfuly expired login session',
      });
    } catch (err) {
      res.status(400).json({
        errors: [
          {
            title: 'Logout Failed',
            detail: 'Something went wrong during the logout process.',
            errorMessage: err.message,
          },
        ],
      });
    }
  });

module.exports = router;

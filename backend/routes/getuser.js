const express = require('express');
const bcrypt = require('bcryptjs');

const User = require('../models/user');
const Session = require('../models/session');
const { authenticate } = require('../middleware/authenticate');
//const { csrfCheck } = require('../middleware/csrfCheck');
const { initSession, isEmail } = require('../utils/utils');
const userService = require('../services/user');

const router = express.Router();

// GET the user's details
router.get('/getuser', authenticate, async (req, res) => {
  try {
    const { userId } = req.session;
    const user = await userService.readById(userId);
    //const user = await User.findById({ _id: userId }, { email: 1, _id: 0 });
    //console.log(user);
    const {email} = user.email;
    res.status(200).json({
      title: 'Authentication successful',
      detail: 'Successfully authenticated user',
      user_email: email,
      user_id: userId,
      first: user.first_name,
      last: user.last_name,
    });
  } catch (err) {
    res.status(401).json({
      errors: [
        {
          title: 'Unauthorized',
          detail: 'Not authorized to access this route',
          errorMessage: err.message,
        },
      ],
    });
  }
});

// GET a user's details
router.get('/getuser/:userId', authenticate, async (req, res) => {
  const { userId } = req.params;

  // ensure id is valid
  if (!mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(404).json({error: 'Invalid Mongo ID'});
  }

  const user = await user.readById(userId);

  if (!user) {
      return res.status(404).json({error: 'No user with that ID'});
  }

  res.status(200).json(user);
});
module.exports = router;
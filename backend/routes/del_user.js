const express = require('express');
const bcrypt = require('bcryptjs');

const userService = require('../services/user');
const Session = require('../models/session');
const { authenticate } = require('../middleware/authenticate');
//const { csrfCheck } = require('../middleware/csrfCheck');
const { initSession, isEmail } = require('../utils/utils');

const router = express.Router();

router.delete('/del_user', authenticate, async (req, res) => {
  try {
    const { userId } = req.session;
    const { password } = req.body;
    if (typeof password !== 'string') {
      throw new Error();
    }
    const user = await userService.readById(userId);

    const passwordValidated = await bcrypt.compare(password, user.password);
    if (!passwordValidated) {
      throw new Error();
    }

    await Session.expireAllTokensForUser(userId);
    res.clearCookie('token');
    await userService.deleteById(userId);
    res.json({
      title: 'Account Deleted',
      detail: 'Account with credentials provided has been successfuly deleted',
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
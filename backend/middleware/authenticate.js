const User = require('../models/user');
const Session = require('../models/session');

const authenticate = async (req, res, next) => {
  try {
    //var {token} = req.cookies;
    var token = req.headers.authorization;
    //console.log(token);
    
    if (typeof token !== 'string') {
      //console.log(req);
      throw new Error('Request cookie is invalid.');
    }
    const session = await Session.findOne({ token, status: 'valid' });
    if (!session) {
      res.clearCookie('token');
      throw new Error('Your session has expired. You need to log in.');
    }
    req.session = session;
    next();
  } catch (err) {
    res.status(401).json({
      errors: [
        {
          title: 'Unauthorized',
          detail: 'Authentication credentials invalid',
          errorMessage: err.message,
        },
      ],
    });
  }
};

module.exports = { authenticate };

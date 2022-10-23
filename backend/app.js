require('dotenv').config();
const cors = require("cors");

const express = require('express');
const mongoose = require('mongoose');

const indexRoutes = require('./routes/index');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const groupRoutes = require('./routes/groups');
const itemRoutes = require('./routes/items');
const categoryRoutes = require('./routes/category');
const favouriteRoutes = require('./routes/favourites');
//const uploadRoute = require('./routes/upload');
//const Grid = require('gridfs-stream');

const loginRoutes = require('./routes/login');
const logoutRoutes = require('./routes/logout');
const registerRoutes = require('./routes/register');
const del_userRoutes = require('./routes/del_user');
const cartRoutes = require('./routes/cart');
const getuserRoutes = require('./routes/getuser');

const { applySpec } = require('ramda');

const app = express();









// middleware
app.use(express.json());
//app.use(cors());

app.use(function (req, res, next) {
    console.log(req.path, req.method);
    if (req.header.origin) {
    res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
    }
    res.setHeader('Access-Control-Allow-Credentials', true);
    
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization'
      );
    res.header('Access-Control-Allow-Methods', 'GET, OPTIONS, PUT, POST, PATCH, DELETE');
    
    next();
});
app.use(
    express.urlencoded({ extended: true })
);

app.use(bodyParser.json());
app.use(cookieParser());

// routes
app.use('', indexRoutes);
app.use('', logoutRoutes);
app.use('', registerRoutes);
app.use('', getuserRoutes);
app.use('', del_userRoutes);
app.use('', loginRoutes);
app.use('', groupRoutes);
app.use('', itemRoutes);
app.use('', cartRoutes);
app.use('', favouriteRoutes);
app.use('', categoryRoutes);
//app.use('/file', uploadRoute);

// connect to database
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
    console.log('Connecting to database...');
    console.log('Listening on port', process.env.PORT);
});
})
.catch((error) => {
    console.log(error);
});

// fix CORS error











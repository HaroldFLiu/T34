require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');

const indexRoutes = require('./routes/index');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const groupRoutes = require('./routes/groups');
const itemRoutes = require('./routes/items');
//const uploadRoute = require('./routes/upload');
//const Grid = require('gridfs-stream');

const loginRoutes = require('./routes/login');
const logoutRoutes = require('./routes/logout');
const registerRoutes = require('./routes/register');
const del_userRoutes = require('./routes/del_user');
const { applySpec } = require('ramda');

const app = express();

// middleware
app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
});
app.use(express.json());
app.use(
    express.urlencoded({ extended: true })
);
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
})

app.use(bodyParser.json());
app.use(cookieParser());

// routes
app.use('', indexRoutes);
app.use('', logoutRoutes);
app.use('', registerRoutes);
app.use('', del_userRoutes)
app.use('', loginRoutes);
app.use('', groupRoutes);
app.use('', itemRoutes);
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





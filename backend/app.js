require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const indexRoutes = require('./routes/index');
const loginRoutes = require('./routes/login');
const groupRoutes = require('./routes/groups');
const itemRoutes = require('./routes/items');
//const uploadRoute = require('./routes/upload');
//const Grid = require('gridfs-stream');

let gfs;
const app = express();

// middleware
app.use(express.json());

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
})

// routes
app.use('', indexRoutes);
app.use('', loginRoutes);
app.use('/groups', groupRoutes);
app.use('/public', itemRoutes);
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





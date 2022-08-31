require('dotenv').config();

process.env['MONGO_URI'] = 'mongodb://localhost:27017/myapp'

const express = require('express');
const mongoose = require('mongoose');
const indexRoutes = require('./routes/index');
const loginRoutes = require('./routes/login');
const groupRoutes = require('./routes/groups');

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
app.use('', groupRoutes);

// connect to database
mongoose.connect(process.env.MONGO_URI)
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




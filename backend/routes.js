const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.json({mssg: 'HOME'});
});

router.get('/login', (req, res) => {
    res.json({mssg: 'login'});
});

module.exports = router;

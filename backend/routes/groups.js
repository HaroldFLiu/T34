const express = require('express');

const router = express.Router();

router.get('/groups', (req, res) => {
    res.json({mssg: 'groups'});
});

module.exports = router;

const express = require('express');
// using express router
const router = express.Router();

// @route   GET api/users
// @des     Test route
// @access  Public
router.get('/', (req, res) => res.send('User route'));

module.exports = router;

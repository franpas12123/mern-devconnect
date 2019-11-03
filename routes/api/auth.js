const express = require('express');
// using express router
const router = express.Router();

// @route   GET api/auth
// @des     Test route
// @access  Public
router.get('/', (req, res) => res.send('Auth route'));

module.exports = router;

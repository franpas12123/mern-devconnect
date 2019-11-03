const express = require('express');
// using express router
const router = express.Router();

// @route   GET api/profile
// @des     Test route
// @access  Public
router.get('/', (req, res) => res.send('Profile route'));

module.exports = router;

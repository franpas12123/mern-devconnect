const express = require('express');
// using express router
const router = express.Router();

// @route   GET api/posts
// @des     Test route
// @access  Public
router.get('/', (req, res) => res.send('Posts route'));

module.exports = router;

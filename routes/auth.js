const express = require('express');
const router = express.Router();

// @route   Get  api/auth
// @desc    Get Logged in User
// @access  private
router.get('/', (req, res) => {
  res.send('Get logged in User');
});

// @route   POST  api/auth
// @desc    Auth user and get token
// @access  Public
router.post('/', (req, res) => {
  res.send('Log in User');
});

module.exports = router;

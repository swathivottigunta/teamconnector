const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

// Modal
const Profile = require('../../models/Profile');
const User = require('../../models/User');

// @route  GET api/profile/me
// @desc   Get current users profile
// @access public

router.get('/', auth, async (req, res) => {
  try {
    const profile = await (await Profile.findOne({ user: req.user.id })).populate('user',);

  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
  res.send('Profile route');
});

module.exports = router;

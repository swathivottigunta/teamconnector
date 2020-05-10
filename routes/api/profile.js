const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

// Modal
const Profile = require('../../models/Profile');
const User = require('../../models/User');

// @route  GET api/profile/me
// @desc   Get current users profile
// @access public

router.get('/me', auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({
      user: req.user.id,
    }).populate('user', ['name', 'avatar']);

    if (!profile) res.status(400).json({ msg: 'No Profile for this user' });
    else res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
  res.send('Profile route');
});

module.exports = router;

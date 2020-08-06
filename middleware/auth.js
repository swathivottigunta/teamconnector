const jwt = require('jsonwebtoken');
const config = require('../config/default.json');

module.exports = function (req, res, next) {
  //get the token from the header
  const token = req.header('x-auth-token');

  // Check if not token exists : 401  not authorized
  if (!token) res.status(401).send({ msg: 'No token authoriazation denied' });

  // Verify token
  try {
    const decoded = jwt.verify(token, config.jwtSecret);
    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).send({ msg: 'Token is not valid' });
  }
};

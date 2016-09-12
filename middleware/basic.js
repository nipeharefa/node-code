var basicAuth = require('basic-auth')
require('dotenv').config()
const username = process.env.USER_NAME
const password = process.env.USER_PASWD

var auth = function (req, res, next) {
  function unauthorized(res) {
    res.set('WWW-Authenticate', 'Basic realm=Authorization Required');
    return res.send(401);
  };

  var user = basicAuth(req);

  if (!user || !user.name || !user.pass) {
    return unauthorized(res);
  };

  if (user.name === username && user.pass === password) {
    return next();
  } else {
    return unauthorized(res);
  };
};


module.exports = auth

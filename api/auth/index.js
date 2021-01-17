const jwt = require("jsonwebtoken");
const Users = require("../models/Users");

const isAuthenticated = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) res.sendStatus(403);

  const { _id } = jwt.verify(token, "secret");
  Users.findOne({ _id })
    .exec()
    .then((x) => {
      req.user = x;
      next();
    });
};

module.exports = { isAuthenticated };

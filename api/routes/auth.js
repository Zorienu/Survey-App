const express = require("express");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const Users = require("../models/Users");
const { isAuthenticated } = require("../auth/index");

const router = express.Router();

const signToken = (_id) => {
  return jwt.sign({ _id }, "secret", {
    expiresIn: 60 * 60 * 24 * 365,
  });
};

router.post("/register", (req, res) => {
  const { email, password } = req.body;
  Users.findOne({ email })
    .exec()
    .then((user) => {
      if (user) return res.send({ message: "The user already exists" });
      crypto.randomBytes(16, (err, salt) => {
        const newSalt = salt.toString("base64");
        crypto.pbkdf2(password, newSalt, 10000, 64, "sha1", (err, encryptedPassword) => {
          const newPassword = encryptedPassword.toString("base64");
          Users.create({
            email,
            name: req.body.name,
            password: newPassword,
            salt: newSalt,
            phone: req.body.phone,
          }).then(() => res.send({ message: "User created successfully" }));
        });
      });
    });
});

router.post("/login", (req, res) => {
  const { email, password } = req.body;
  Users.findOne({ email })
    .exec()
    .then((user) => {
      if (!user) return res.send({ token: "", message: "Incorrect email or password" });
      crypto.pbkdf2(password, user.salt, 10000, 64, "sha1", (err, encryptedPassword) => {
        if (user.password !== encryptedPassword.toString("base64")) return res.send({ token: "", message: "Incorrect email or password" });
        const token = signToken(user._id);
        res.send({ token });
      });
    });
});

router.get("/me", isAuthenticated, (req, res) => {
  res.send({
    email: req.user.email,
    name: req.user.name,
  });
});

module.exports = router;

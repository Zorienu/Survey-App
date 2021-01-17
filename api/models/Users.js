const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const User = new Schema({
  email: String,
  name: String,
  phone: Number,
  password: String,
  salt: String,
});

const Users = mongoose.model("User", User);
module.exports = Users;

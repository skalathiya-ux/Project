const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: String,
  email: { type: String, unique: true },
  password: String,
  created_at: { type: Date, default: Date.now }
});

const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel;

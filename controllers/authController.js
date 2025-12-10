const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const UserModel = require("../models/UserModel");

const authController = {
  register: async (req, res) => {
    const { username, email, password } = req.body;

    const existing = await UserModel.findOne({ email });
    if (existing) {
      return res.json({ error: "Email already used" });
    }

    const hashedPass = await bcrypt.hash(password, 10);

    const user = new UserModel({
      username,
      email,
      password: hashedPass
    });

    await user.save();

    res.json({ message: "User registered" });
  },

  login: async (req, res) => {
    const { email, password } = req.body;

    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.json({ error: "Invalid email or password" });
    }

    const ok = await bcrypt.compare(password, user.password);
    if (!ok) {
      return res.json({ error: "Invalid email or password" });
    }

    const token = jwt.sign(
      { id: user._id },
       "secret123"
    );

    res.json({ token });
  }
};

module.exports = authController;

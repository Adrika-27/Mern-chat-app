const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const User = require("../models/User");

// @route   POST /api/user/register
// @desc    Register a new user
// @access  Public
router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  // 1. Validate input
  if (!name || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    // 2. Check if user already exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    // 3. Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // 4. Create new user
    const user = await User.create({
      name,
      email,
      password: hashedPassword
    });

    // 5. Return success
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email
    });
  } catch (error) {
    console.error("❌ Registration failed:", error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;

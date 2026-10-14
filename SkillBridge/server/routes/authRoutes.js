const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const protect = require("../middleware/authMiddleware");
const router = express.Router();

function makeToken(userId) {
  if (!process.env.JWT_SECRET) throw new Error("JWT_SECRET is not configured in .env");
  return jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: "7d" });
}
const publicUser = user => ({ id: user._id, name: user.name, email: user.email });

router.post("/register", async (req, res) => {
  try {
    const name = String(req.body.name || "").trim();
    const email = String(req.body.email || "").trim().toLowerCase();
    const password = String(req.body.password || "");
    if (!name || !email || !password) return res.status(400).json({ message: "Name, email and password are required." });
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return res.status(400).json({ message: "Enter a valid email address." });
    if (password.length < 8) return res.status(400).json({ message: "Password must be at least 8 characters." });
    if (await User.findOne({ email })) return res.status(409).json({ message: "An account with this email already exists." });
    const passwordHash = await bcrypt.hash(password, 12);
    const user = await User.create({ name, email, passwordHash });
    return res.status(201).json({ message: "Account created successfully.", token: makeToken(user._id.toString()), user: publicUser(user) });
  } catch (error) {
    if (error.code === 11000) return res.status(409).json({ message: "An account with this email already exists." });
    console.error("Register error:", error.message);
    return res.status(500).json({ message: "Could not create account." });
  }
});

router.post("/login", async (req, res) => {
  try {
    const email = String(req.body.email || "").trim().toLowerCase();
    const password = String(req.body.password || "");
    if (!email || !password) return res.status(400).json({ message: "Email and password are required." });
    const user = await User.findOne({ email });
    if (!user || !(await bcrypt.compare(password, user.passwordHash))) return res.status(401).json({ message: "Incorrect email or password." });
    return res.json({ message: "Login successful.", token: makeToken(user._id.toString()), user: publicUser(user) });
  } catch (error) {
    console.error("Login error:", error.message);
    return res.status(500).json({ message: "Could not log in." });
  }
});

router.get("/me", protect, (req, res) => res.json({ user: publicUser(req.user) }));
module.exports = router;

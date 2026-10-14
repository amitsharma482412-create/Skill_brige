const jwt = require("jsonwebtoken");
const User = require("../models/User");
async function protect(req, res, next) {
  const [scheme, token] = (req.headers.authorization || "").split(" ");
  if (scheme !== "Bearer" || !token) return res.status(401).json({ message: "Please log in to continue." });
  try {
    if (!process.env.JWT_SECRET) throw new Error("JWT_SECRET is not configured");
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.userId).select("_id name email");
    if (!user) return res.status(401).json({ message: "User account not found." });
    req.user = user;
    next();
  } catch {
    return res.status(401).json({ message: "Invalid or expired login token." });
  }
}
module.exports = protect;

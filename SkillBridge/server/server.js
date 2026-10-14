require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const progressRoutes = require("./routes/progressRoutes");
const quizRoutes = require("./routes/quizRoutes");

const app = express();
app.use(cors({ origin: process.env.CLIENT_URL || "http://localhost:5173" }));
app.use(express.json());
app.get("/", (req, res) => res.json({ message: "SkillBridge API is running" }));
app.use("/api/auth", authRoutes);
app.use("/api/progress", progressRoutes);
app.use("/api/quizzes", quizRoutes);

const PORT = process.env.PORT || 5000;
async function startServer() {
  try {
    await connectDB();
    app.listen(PORT, () => console.log(`SkillBridge server running at http://localhost:${PORT}`));
  } catch (error) {
    console.error("Could not start server:", error.message);
    process.exit(1);
  }
}
startServer();

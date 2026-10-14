const express = require("express");
const QuizScore = require("../models/QuizScore");
const protect = require("../middleware/authMiddleware");
const router = express.Router();
router.use(protect);

router.post("/scores", async (req, res) => {
  try {
    const role = String(req.body.role || "").trim();
    const quizName = String(req.body.quizName || "").trim();
    const score = Number(req.body.score);
    const totalQuestions = Number(req.body.totalQuestions);
    if (!role || !quizName) return res.status(400).json({ message: "Role and quizName are required." });
    if (!Number.isInteger(score) || !Number.isInteger(totalQuestions) || totalQuestions < 1 || score < 0 || score > totalQuestions) {
      return res.status(400).json({ message: "Score must be an integer between 0 and totalQuestions." });
    }
    const saved = await QuizScore.create({ user: req.user._id, role, quizName, score, totalQuestions });
    res.status(201).json({ message: "Quiz score saved successfully.", quiz: {
      id: saved._id, role: saved.role, quizName: saved.quizName, score: saved.score,
      totalQuestions: saved.totalQuestions, createdAt: saved.createdAt
    }});
  } catch (error) {
    console.error("Save quiz score error:", error.message);
    res.status(500).json({ message: "Could not save quiz score." });
  }
});

router.get("/scores", async (req, res) => {
  try {
    const scores = await QuizScore.find({ user: req.user._id }).sort({ createdAt: -1 }).limit(100).select("role quizName score totalQuestions createdAt");
    res.json({ scores });
  } catch (error) {
    console.error("Get quiz scores error:", error.message);
    res.status(500).json({ message: "Could not load quiz scores." });
  }
});
module.exports = router;

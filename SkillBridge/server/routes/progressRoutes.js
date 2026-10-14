const express = require("express");
const Progress = require("../models/Progress");
const protect = require("../middleware/authMiddleware");
const router = express.Router();
router.use(protect);

router.get("/:role", async (req, res) => {
  try {
    const progress = await Progress.findOne({ user: req.user._id, role: req.params.role });
    res.json({ role: req.params.role, completedTopics: progress ? progress.completedTopics : [] });
  } catch (error) {
    console.error("Get progress error:", error.message);
    res.status(500).json({ message: "Could not load progress." });
  }
});

router.put("/:role", async (req, res) => {
  try {
    const { completedTopics } = req.body;
    if (!Array.isArray(completedTopics) || !completedTopics.every(topic => typeof topic === "string")) {
      return res.status(400).json({ message: "completedTopics must be an array of strings." });
    }
    const cleanTopics = [...new Set(completedTopics.map(topic => topic.trim()).filter(Boolean))];
    const progress = await Progress.findOneAndUpdate(
      { user: req.user._id, role: req.params.role },
      { $set: { completedTopics: cleanTopics } },
      { new: true, upsert: true, runValidators: true, setDefaultsOnInsert: true }
    );
    res.json({ message: "Progress saved successfully.", role: progress.role, completedTopics: progress.completedTopics, updatedAt: progress.updatedAt });
  } catch (error) {
    console.error("Save progress error:", error.message);
    res.status(500).json({ message: "Could not save progress." });
  }
});
module.exports = router;

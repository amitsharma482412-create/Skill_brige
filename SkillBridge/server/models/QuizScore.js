const mongoose = require("mongoose");
const quizScoreSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  role: { type: String, required: true, trim: true },
  quizName: { type: String, required: true, trim: true, maxlength: 120 },
  score: { type: Number, required: true, min: 0 },
  totalQuestions: { type: Number, required: true, min: 1 }
}, { timestamps: true });
module.exports = mongoose.model("QuizScore", quizScoreSchema);

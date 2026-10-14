const mongoose = require("mongoose");
const progressSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  role: { type: String, required: true, trim: true },
  completedTopics: { type: [String], default: [] }
}, { timestamps: true });
progressSchema.index({ user: 1, role: 1 }, { unique: true });
module.exports = mongoose.model("Progress", progressSchema);

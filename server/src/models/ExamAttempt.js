const mongoose = require("mongoose");

const examAttemptSchema = new mongoose.Schema(
  {
    student: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    dayNumber: { type: Number, required: true, min: 1, max: 50 },
    startedAt: { type: Date, required: true },
    submittedAt: { type: Date },
    answers: { type: [Number], default: [] },
    score: { type: Number, default: 0 },
    total: { type: Number, default: 0 },
    durationMinutes: { type: Number, default: 60 }
  },
  { timestamps: true }
);

examAttemptSchema.index({ student: 1, dayNumber: 1 }, { unique: true });

module.exports = mongoose.model("ExamAttempt", examAttemptSchema);

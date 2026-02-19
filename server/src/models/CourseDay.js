const mongoose = require("mongoose");

const subsectionSchema = new mongoose.Schema(
  {
    titleEn: { type: String, default: "" },
    titleMr: { type: String, default: "" },
    contentEn: { type: String, default: "" },
    contentMr: { type: String, default: "" },
    videoUrl: { type: String, default: "" }
  },
  { _id: false }
);

const questionSchema = new mongoose.Schema(
  {
    questionEn: { type: String, default: "" },
    questionMr: { type: String, default: "" },
    options: [
      {
        textEn: { type: String, default: "" },
        textMr: { type: String, default: "" }
      }
    ],
    correctIndex: { type: Number, default: 0 }
  },
  { _id: false }
);

const courseDaySchema = new mongoose.Schema(
  {
    dayNumber: { type: Number, unique: true, required: true, min: 1, max: 50 },
    imageUrl: { type: String, default: "" },
    videoUrl: { type: String, default: "" },
    contentEn: { type: String, default: "" },
    contentMr: { type: String, default: "" },
    subsections: { type: [subsectionSchema], default: [] },
    exam: {
      durationMinutes: { type: Number, default: 60 },
      questions: { type: [questionSchema], default: [] }
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("CourseDay", courseDaySchema);

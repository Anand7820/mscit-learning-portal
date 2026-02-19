const mongoose = require("mongoose");

const certificateSchema = new mongoose.Schema(
  {
    student: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    certificateId: { type: String, unique: true, required: true },
    courseName: { type: String, default: "MS-CIT" },
    issuedAt: { type: Date, required: true },
    examAttempt: { type: mongoose.Schema.Types.ObjectId, ref: "ExamAttempt" }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Certificate", certificateSchema);

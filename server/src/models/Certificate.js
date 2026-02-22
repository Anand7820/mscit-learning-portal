const mongoose = require("mongoose");

const certificateSchema = new mongoose.Schema(
  {
    student: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    certificateId: { type: String, unique: true, required: true },
    courseName: { type: String, default: "MS-CIT" },
    issuedAt: { type: Date, required: true },
    examAttempt: { type: mongoose.Schema.Types.ObjectId, ref: "ExamAttempt" },
    // Optional: verification code for public certificate verification
    verificationCode: { type: String, unique: true, sparse: true },
    // Optional: status for future use (e.g. revoked)
    status: { type: String, enum: ["issued", "revoked"], default: "issued" }
  },
  { timestamps: true }
);

// Index for fast lookup by student (one certificate per student per course)
certificateSchema.index({ student: 1 });
// Index for lookup by certificateId (e.g. verification page)
certificateSchema.index({ certificateId: 1 });
// Index for verification by code
certificateSchema.index({ verificationCode: 1 }, { sparse: true });

module.exports = mongoose.model("Certificate", certificateSchema);

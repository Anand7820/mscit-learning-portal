const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema(
  {
    photoUrl: { type: String, default: "" },
    signatureUrl: { type: String, default: "" },
    name: { type: String, default: "" },
    age: { type: Number },
    fatherName: { type: String, default: "" },
    motherName: { type: String, default: "" },
    surname: { type: String, default: "" },
    dob: { type: Date },
    gender: { type: String, default: "" },
    maritalStatus: { type: String, default: "" },
    phoneNumber: { type: String, default: "" },
    language: { type: String, default: "en" },
    address: { type: String, default: "" },
    education: { type: String, default: "" },
    selectedCourse: { type: String, default: "MS-CIT" }
  },
  { _id: false }
);

const userSchema = new mongoose.Schema(
  {
    email: { type: String, unique: true, required: true, lowercase: true },
    passwordHash: { type: String, required: true },
    role: { type: String, enum: ["admin", "student"], default: "student" },
    status: {
      type: String,
      enum: ["pending", "approved", "rejected"],
      default: "pending"
    },
    studentNumber: { type: String, unique: true, sparse: true },
    profileCompleted: { type: Boolean, default: false },
    profile: { type: profileSchema, default: () => ({}) },
    feesPaid: { type: Boolean, default: false },
    feesPart1Paid: { type: Boolean, default: false },
    feesPart2Paid: { type: Boolean, default: false },
    needsSecondFee: { type: Boolean, default: false },
    unlockedUpTo: { type: Number, default: 0 },
    lastAccessAt: { type: Date },
    lastUnlockDate: { type: String, default: "" },
    manualUnlockedDays: { type: [Number], default: [] },
    batch: { type: mongoose.Schema.Types.ObjectId, ref: "Batch", default: null }
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);

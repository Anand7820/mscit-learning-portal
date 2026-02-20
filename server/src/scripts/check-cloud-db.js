/**
 * Quick check: What's in the cloud database?
 * Run: node src/scripts/check-cloud-db.js
 */

require("dotenv").config();
const mongoose = require("mongoose");

const CLOUD_URI = process.env.CLOUD_MONGO_URI;

if (!CLOUD_URI) {
  console.error("Missing CLOUD_MONGO_URI in .env");
  process.exit(1);
}

const CourseDay = require("../models/CourseDay");
const User = require("../models/User");
const ExamAttempt = require("../models/ExamAttempt");

async function check() {
  const conn = mongoose.createConnection(CLOUD_URI);
  await conn.asPromise();
  console.log("Connected to CLOUD database.\n");

  const CourseDayModel = conn.model("CourseDay", CourseDay.schema);
  const UserModel = conn.model("User", User.schema);
  const ExamAttemptModel = conn.model("ExamAttempt", ExamAttempt.schema);

  const day1 = await CourseDayModel.findOne({ dayNumber: 1 }).lean();
  console.log("Day 1 check:");
  if (!day1) {
    console.log("  ❌ Day 1 NOT FOUND in cloud database!");
  } else {
    console.log("  ✅ Day 1 exists");
    console.log(`  Exam questions: ${day1.exam?.questions?.length || 0}`);
    console.log(`  Exam duration: ${day1.exam?.durationMinutes || "N/A"} minutes`);
    if (!day1.exam || !day1.exam.questions || day1.exam.questions.length === 0) {
      console.log("  ⚠️  Day 1 has NO exam questions - this is why exam is unavailable!");
    }
  }

  const totalDays = await CourseDayModel.countDocuments();
  console.log(`\nTotal CourseDays in cloud: ${totalDays}`);

  const totalUsers = await UserModel.countDocuments();
  console.log(`Total Users in cloud: ${totalUsers}`);

  const totalAttempts = await ExamAttemptModel.countDocuments();
  console.log(`Total ExamAttempts in cloud: ${totalAttempts}`);

  await conn.close();
}

check().catch((err) => {
  console.error("Error:", err.message);
  process.exit(1);
}).finally(() => {
  process.exit(0);
});

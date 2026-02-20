/**
 * Debug: Check exactly what's in Day 1 exam questions in CLOUD database
 * Run: node src/scripts/debug-day1-questions.js
 */

require("dotenv").config();
const mongoose = require("mongoose");

const CLOUD_URI = process.env.CLOUD_MONGO_URI;

if (!CLOUD_URI) {
  console.error("Missing CLOUD_MONGO_URI in .env");
  process.exit(1);
}

const CourseDay = require("../models/CourseDay");

async function debug() {
  const conn = mongoose.createConnection(CLOUD_URI);
  await conn.asPromise();
  console.log("Connected to CLOUD database.\n");

  const CourseDayModel = conn.model("CourseDay", CourseDay.schema);

  // Get Day 1 with all fields
  const day1 = await CourseDayModel.findOne({ dayNumber: 1 }).lean();

  if (!day1) {
    console.log("❌ Day 1 not found!");
    await conn.close();
    process.exit(1);
  }

  console.log("=== Day 1 Exam Questions Debug ===\n");
  console.log(`Total questions in exam.questions array: ${day1.exam?.questions?.length || 0}\n`);

  if (day1.exam?.questions) {
    day1.exam.questions.forEach((q, index) => {
      console.log(`Question ${index + 1}:`);
      console.log(`  EN: "${q.questionEn}"`);
      console.log(`  MR: "${q.questionMr}"`);
      console.log(`  Options: ${q.options?.length || 0}`);
      console.log(`  Correct Index: ${q.correctIndex}`);
      console.log("");
    });
  } else {
    console.log("❌ No exam.questions found!");
  }

  // Also check if there are multiple CourseDay documents for Day 1 (shouldn't happen)
  const allDay1 = await CourseDayModel.find({ dayNumber: 1 }).lean();
  console.log(`\n⚠️  Found ${allDay1.length} CourseDay document(s) with dayNumber=1 (should be 1)`);

  await conn.close();
}

debug().catch((err) => {
  console.error("Error:", err.message);
  console.error(err.stack);
  process.exit(1);
}).finally(() => {
  process.exit(0);
});

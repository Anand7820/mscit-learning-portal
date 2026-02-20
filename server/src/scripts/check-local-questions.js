/**
 * Check how many exam questions each day has in LOCAL database.
 * Run: node src/scripts/check-local-questions.js
 */

require("dotenv").config();
const mongoose = require("mongoose");

const LOCAL_URI =
  process.env.LOCAL_MONGO_URI || "mongodb://127.0.0.1:27017/mscit_portal";

const CourseDay = require("../models/CourseDay");

async function check() {
  const conn = mongoose.createConnection(LOCAL_URI);
  await conn.asPromise();
  console.log("Connected to LOCAL database.\n");

  const CourseDayModel = conn.model("CourseDay", CourseDay.schema);

  const days = await CourseDayModel.find()
    .select("dayNumber exam.questions")
    .sort({ dayNumber: 1 })
    .lean();

  console.log("=== Exam Questions Count by Day ===\n");

  let totalQuestions = 0;
  let daysWithQuestions = 0;
  let daysWithoutQuestions = 0;

  days.forEach((day) => {
    const qCount = day.exam?.questions?.length || 0;
    totalQuestions += qCount;

    if (qCount > 0) {
      daysWithQuestions++;
      console.log(`Day ${String(day.dayNumber).padStart(2, " ")}: ${qCount} question(s)`);
    } else {
      daysWithoutQuestions++;
    }
  });

  console.log("\n=== Summary ===");
  console.log(`Total days: ${days.length}`);
  console.log(`Days with questions: ${daysWithQuestions}`);
  console.log(`Days without questions: ${daysWithoutQuestions}`);
  console.log(`Total exam questions: ${totalQuestions}`);

  // Show days with most questions
  const sortedByQuestions = days
    .map((d) => ({
      day: d.dayNumber,
      count: d.exam?.questions?.length || 0
    }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 5);

  if (sortedByQuestions.length > 0 && sortedByQuestions[0].count > 0) {
    console.log("\n=== Top 5 Days by Question Count ===");
    sortedByQuestions.forEach((d) => {
      if (d.count > 0) {
        console.log(`Day ${d.day}: ${d.count} questions`);
      }
    });
  }

  await conn.close();
}

check().catch((err) => {
  console.error("Error:", err.message);
  process.exit(1);
}).finally(() => {
  process.exit(0);
});

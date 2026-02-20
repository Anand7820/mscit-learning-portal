/**
 * Directly copy Day 1 exam questions from LOCAL to CLOUD
 * Run: node src/scripts/copy-day1-questions.js
 */

require("dotenv").config();
const mongoose = require("mongoose");

const LOCAL_URI =
  process.env.LOCAL_MONGO_URI || "mongodb://127.0.0.1:27017/mscit_portal";
const CLOUD_URI = process.env.CLOUD_MONGO_URI;

if (!CLOUD_URI) {
  console.error("Missing CLOUD_MONGO_URI in .env");
  process.exit(1);
}

const CourseDay = require("../models/CourseDay");

async function copy() {
  const localConn = mongoose.createConnection(LOCAL_URI);
  const cloudConn = mongoose.createConnection(CLOUD_URI);

  await localConn.asPromise();
  await cloudConn.asPromise();
  console.log("Connected to LOCAL and CLOUD.\n");

  const LocalModel = localConn.model("CourseDay", CourseDay.schema);
  const CloudModel = cloudConn.model("CourseDay", CourseDay.schema);

  // Get Day 1 from local
  const localDay1 = await LocalModel.findOne({ dayNumber: 1 }).lean();
  if (!localDay1) {
    console.error("❌ Day 1 not found in LOCAL database!");
    await localConn.close();
    await cloudConn.close();
    process.exit(1);
  }

  const questionCount = localDay1.exam?.questions?.length || 0;
  console.log(`✅ Found Day 1 in LOCAL with ${questionCount} questions\n`);

  if (questionCount === 0) {
    console.error("❌ LOCAL Day 1 has no questions!");
    await localConn.close();
    await cloudConn.close();
    process.exit(1);
  }

  // Get existing cloud Day 1 to preserve other fields
  const cloudDay1 = await CloudModel.findOne({ dayNumber: 1 }).lean();
  if (!cloudDay1) {
    console.error("❌ Day 1 not found in CLOUD database!");
    await localConn.close();
    await cloudConn.close();
    process.exit(1);
  }

  // Replace the entire exam object (not just questions) to ensure it works
  const result = await CloudModel.updateOne(
    { dayNumber: 1 },
    {
      $set: {
        exam: {
          durationMinutes: localDay1.exam.durationMinutes || 60,
          questions: localDay1.exam.questions
        }
      }
    }
  );

  if (result.matchedCount === 0) {
    console.error("❌ Day 1 not found in CLOUD database!");
  } else if (result.modifiedCount === 0) {
    console.log("⚠️  Day 1 found but no changes made");
  } else {
    console.log(`✅ Updated Day 1 in CLOUD with ${questionCount} questions`);
  }

  // Verify - force fresh read
  const cloudDay1Verify = await CloudModel.findOne({ dayNumber: 1 })
    .select('exam.questions')
    .lean();
  const cloudQuestionCount = cloudDay1Verify?.exam?.questions?.length || 0;
  console.log(`\n📊 Verification:`);
  console.log(`   LOCAL: ${questionCount} questions`);
  console.log(`   CLOUD: ${cloudQuestionCount} questions`);

  if (questionCount === cloudQuestionCount) {
    console.log(`\n✅ Success! Cloud now has ${cloudQuestionCount} questions.`);
  } else {
    console.log(`\n❌ Mismatch! Cloud has ${cloudQuestionCount} questions, expected ${questionCount}.`);
  }

  await localConn.close();
  await cloudConn.close();
}

copy().catch((err) => {
  console.error("Error:", err.message);
  console.error(err.stack);
  process.exit(1);
}).finally(() => {
  process.exit(0);
});

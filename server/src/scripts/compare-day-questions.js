/**
 * Compare exam questions for a specific day between LOCAL and CLOUD databases.
 * Usage: node src/scripts/compare-day-questions.js [dayNumber]
 * Example: node src/scripts/compare-day-questions.js 2
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
const dayNumber = Number(process.argv[2]) || 2;

async function compare() {
  const localConn = mongoose.createConnection(LOCAL_URI);
  const cloudConn = mongoose.createConnection(CLOUD_URI);

  await localConn.asPromise();
  await cloudConn.asPromise();

  const LocalModel = localConn.model("CourseDay", CourseDay.schema);
  const CloudModel = cloudConn.model("CourseDay", CourseDay.schema);

  const localDay = await LocalModel.findOne({ dayNumber }).lean();
  const cloudDay = await CloudModel.findOne({ dayNumber }).lean();

  console.log(`\n=== Comparing Day ${dayNumber} ===\n`);

  if (!localDay) {
    console.log("❌ LOCAL: Day not found");
  } else {
    const localQCount = localDay.exam?.questions?.length || 0;
    console.log(`✅ LOCAL: Found Day ${dayNumber}`);
    console.log(`   Exam questions: ${localQCount}`);
    if (localQCount > 0) {
      console.log(`   First question: "${localDay.exam.questions[0].questionEn}"`);
    }
  }

  if (!cloudDay) {
    console.log("❌ CLOUD: Day not found");
  } else {
    const cloudQCount = cloudDay.exam?.questions?.length || 0;
    console.log(`✅ CLOUD: Found Day ${dayNumber}`);
    console.log(`   Exam questions: ${cloudQCount}`);
    if (cloudQCount > 0) {
      console.log(`   First question: "${cloudDay.exam.questions[0].questionEn}"`);
    }
  }

  if (localDay && cloudDay) {
    const localQCount = localDay.exam?.questions?.length || 0;
    const cloudQCount = cloudDay.exam?.questions?.length || 0;
    
    console.log(`\n📊 Summary:`);
    console.log(`   Local has ${localQCount} questions`);
    console.log(`   Cloud has ${cloudQCount} questions`);
    
    if (localQCount !== cloudQCount) {
      console.log(`\n⚠️  MISMATCH! Cloud is missing ${localQCount - cloudQCount} questions.`);
      console.log(`   Run: npm run migrate:local-to-cloud to copy all questions.`);
    } else {
      console.log(`\n✅ Match! Both have the same number of questions.`);
    }
  }

  await localConn.close();
  await cloudConn.close();
}

compare().catch((err) => {
  console.error("Error:", err.message);
  process.exit(1);
}).finally(() => {
  process.exit(0);
});

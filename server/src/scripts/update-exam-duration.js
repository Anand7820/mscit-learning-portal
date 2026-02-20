/**
 * Update exam duration to 30 minutes for all course days
 * Updates both LOCAL and CLOUD databases
 */
require("dotenv").config();
const mongoose = require("mongoose");

const LOCAL_URI =
  process.env.LOCAL_MONGO_URI || "mongodb://127.0.0.1:27017/mscit_portal";
const CLOUD_URI = process.env.CLOUD_MONGO_URI;

async function updateDuration(dbUri, dbName) {
  const conn = mongoose.createConnection(dbUri);
  const CourseDay = conn.model(
    "CourseDay",
    new mongoose.Schema({}, { strict: false })
  );

  const result = await CourseDay.updateMany(
    {},
    { $set: { "exam.durationMinutes": 30 } }
  );

  await conn.close();
  return result;
}

async function run() {
  try {
    console.log("🔄 Updating exam duration to 30 minutes...\n");

    // Update LOCAL database
    console.log("📦 Updating LOCAL database...");
    const localResult = await updateDuration(LOCAL_URI, "LOCAL");
    console.log(`   ✅ Updated ${localResult.modifiedCount} course day(s) in LOCAL\n`);

    // Update CLOUD database if URI is provided
    if (CLOUD_URI) {
      console.log("☁️  Updating CLOUD database...");
      const cloudResult = await updateDuration(CLOUD_URI, "CLOUD");
      console.log(`   ✅ Updated ${cloudResult.modifiedCount} course day(s) in CLOUD\n`);
    } else {
      console.log("⚠️  CLOUD_MONGO_URI not set. Skipping cloud database update.\n");
    }

    console.log("✅ All exam durations updated to 30 minutes!");
  } catch (error) {
    console.error("❌ Error:", error.message);
    process.exit(1);
  }
}

run();

/**
 * Copy all data from LOCAL MongoDB to CLOUD MongoDB (e.g. Atlas).
 * Use this to push your local database to the cloud so production has the same data.
 *
 * Setup:
 * 1. Put your cloud URI in .env as CLOUD_MONGO_URI (same format as MONGO_URI for Railway).
 * 2. Ensure local MongoDB is running (default: mongodb://127.0.0.1:27017/mscit_portal).
 *
 * Run from server folder: node src/scripts/migrate-local-to-cloud.js
 * Or: npm run migrate:local-to-cloud
 *
 * WARNING: This REPLACES all data in the cloud database with your local data.
 */

require("dotenv").config();
const mongoose = require("mongoose");

const LOCAL_URI =
  process.env.LOCAL_MONGO_URI || "mongodb://127.0.0.1:27017/mscit_portal";
const CLOUD_URI = process.env.CLOUD_MONGO_URI;

if (!CLOUD_URI) {
  console.error(
    "Missing CLOUD_MONGO_URI in .env. Add your Atlas (or cloud) connection string."
  );
  process.exit(1);
}

const Batch = require("../models/Batch");
const CourseDay = require("../models/CourseDay");
const User = require("../models/User");
const ExamAttempt = require("../models/ExamAttempt");
const Certificate = require("../models/Certificate");

const MODELS_IN_ORDER = [
  { name: "Batch", Model: Batch },
  { name: "CourseDay", Model: CourseDay },
  { name: "User", Model: User },
  { name: "ExamAttempt", Model: ExamAttempt },
  { name: "Certificate", Model: Certificate }
];

async function run() {
  const localConn = mongoose.createConnection(LOCAL_URI);
  const cloudConn = mongoose.createConnection(CLOUD_URI);

  await localConn.asPromise();
  await cloudConn.asPromise();
  console.log("Connected to LOCAL and CLOUD.");

  for (const { name, Model } of MODELS_IN_ORDER) {
    const schema = Model.schema;
    const modelName = Model.modelName;
    const LocalModel = localConn.model(modelName, schema);
    const CloudModel = cloudConn.model(modelName, schema);

    let docs = await LocalModel.find().lean();
    console.log(`  ${name}: ${docs.length} document(s) from local.`);

    // Log exam question counts for CourseDay
    if (modelName === "CourseDay" && docs.length > 0) {
      const questionCounts = docs
        .map(d => ({ day: d.dayNumber, qCount: d.exam?.questions?.length || 0 }))
        .filter(d => d.qCount > 0)
        .slice(0, 5); // Show first 5 days with questions
      if (questionCounts.length > 0) {
        console.log(`  Sample question counts: ${questionCounts.map(d => `Day ${d.day}: ${d.qCount}`).join(", ")}`);
      }
    }

    if (modelName === "ExamAttempt" && docs.length > 0) {
      const byKey = new Map();
      for (const d of docs) {
        const key = `${d.student}-${d.dayNumber}`;
        const existing = byKey.get(key);
        if (!existing) {
          byKey.set(key, d);
        } else {
          const dTime = d.updatedAt ? new Date(d.updatedAt).getTime() : 0;
          const existingTime = existing.updatedAt ? new Date(existing.updatedAt).getTime() : 0;
          if (dTime > existingTime || (!dTime && d.submittedAt && !existing.submittedAt)) {
            byKey.set(key, d);
          }
        }
      }
      const before = docs.length;
      docs = Array.from(byKey.values());
      if (before > docs.length) {
        console.log(`  ${name}: deduplicated ${before} → ${docs.length} (kept latest per student+dayNumber).`);
      }
    }

    await CloudModel.deleteMany({});
    if (docs.length > 0) {
      // For CourseDay, ensure exam.questions array is properly copied
      if (modelName === "CourseDay") {
        // Convert to plain objects and ensure nested arrays are preserved
        const docsToInsert = docs.map(doc => {
          const plain = JSON.parse(JSON.stringify(doc)); // Deep clone to ensure nested arrays preserved
          return plain;
        });
        await CloudModel.insertMany(docsToInsert, { ordered: false });
      } else {
        await CloudModel.insertMany(docs, { ordered: false });
      }
    }
    console.log(`  ${name}: copied to cloud.`);
  }

  await localConn.close();
  await cloudConn.close();
  console.log("Done. Cloud database now matches local.");
}

run().catch((err) => {
  console.error("Migration failed:", err.message);
  process.exit(1);
}).finally(() => {
  process.exit(0);
});

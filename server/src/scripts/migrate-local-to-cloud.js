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

    if (modelName === "ExamAttempt" && docs.length > 0) {
      const byKey = new Map();
      for (const d of docs) {
        const key = `${d.student}-${d.dayNumber}`;
        const existing = byKey.get(key);
        if (!existing || (d.updatedAt && (!existing.updatedAt || d.updatedAt > existing.updatedAt))) {
          byKey.set(key, d);
        }
      }
      docs = Array.from(byKey.values());
      console.log(`  ${name}: deduplicated to ${docs.length} (unique student+dayNumber).`);
    }

    await CloudModel.deleteMany({});
    if (docs.length > 0) {
      await CloudModel.insertMany(docs, { ordered: false });
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

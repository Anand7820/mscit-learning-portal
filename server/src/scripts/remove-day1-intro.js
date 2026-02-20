/**
 * Remove introduction text from Day 1 Section 2 in CLOUD database
 * Run: node src/scripts/remove-day1-intro.js
 */

require("dotenv").config();
const mongoose = require("mongoose");

const CLOUD_URI = process.env.CLOUD_MONGO_URI;

if (!CLOUD_URI) {
  console.error("Missing CLOUD_MONGO_URI in .env");
  process.exit(1);
}

const CourseDay = require("../models/CourseDay");

// Text to remove from the beginning
const introToRemoveEn = "Title: Computer Class Day #1 - How to Use a Computer (Beginner to Expert)\nChannel: EasyTech Class\nLanguage: English (Translated from Hindi)\n\n[00:00] Introduction & Welcome\nHi students! If you don't know how to use a computer at all and want to learn from the very beginning, this free training course series will turn you from a beginner into an expert within a week.\nToday, computer professionals are in demand in every field. If you can operate a computer and work with software like MS Word, Excel, and PowerPoint, you can work as a computer operator in any office. Furthermore, if you want to learn professional skills like coding, web design, digital marketing, or blogging, you must first master these basic computer skills.\n\n";

const introToRemoveMr = "Title: Computer Class Day #1 - How to Use a Computer (Beginner to Expert)\nChannel: EasyTech Class\nLanguage: English (Translated from Hindi)\n\nIntroduction & Welcome\nHi students! If you don't know how to use a computer at all and want to learn from the very beginning, this free training course series will turn you from a beginner into an expert within a week.\nToday, computer professionals are in demand in every field. If you can operate a computer and work with software like MS Word, Excel, and PowerPoint, you can work as a computer operator in any office. Furthermore, if you want to learn professional skills like coding, web design, digital marketing, or blogging, you must first master these basic computer skills.\n\n";

async function removeIntro() {
  const conn = mongoose.createConnection(CLOUD_URI);
  await conn.asPromise();
  console.log("Connected to CLOUD database.\n");

  const CourseDayModel = conn.model("CourseDay", CourseDay.schema);

  // Get Day 1
  const day1 = await CourseDayModel.findOne({ dayNumber: 1 }).lean();
  if (!day1) {
    console.error("❌ Day 1 not found!");
    await conn.close();
    process.exit(1);
  }

  // Get current Section 2 content
  const currentContentEn = day1.subsections?.[1]?.contentEn || "";
  const currentContentMr = day1.subsections?.[1]?.contentMr || "";

  // Remove intro text
  let newContentEn = currentContentEn;
  let newContentMr = currentContentMr;

  if (currentContentEn.startsWith("Computer Class Day #1: Basic Computer Course Script\n")) {
    // Remove the intro part
    const afterScript = currentContentEn.split("Computer Class Day #1: Basic Computer Course Script\n")[1];
    if (afterScript.startsWith(introToRemoveEn)) {
      newContentEn = "Computer Class Day #1: Basic Computer Course Script\n" + afterScript.substring(introToRemoveEn.length);
    }
  }

  if (currentContentMr.startsWith("Computer Class Day #1: Basic Computer Course Script\n")) {
    const afterScript = currentContentMr.split("Computer Class Day #1: Basic Computer Course Script\n")[1];
    if (afterScript.startsWith(introToRemoveMr)) {
      newContentMr = "Computer Class Day #1: Basic Computer Course Script\n" + afterScript.substring(introToRemoveMr.length);
    }
  }

  // Update Day 1
  const result = await CourseDayModel.updateOne(
    { dayNumber: 1 },
    {
      $set: {
        "subsections.1.contentEn": newContentEn,
        "subsections.1.contentMr": newContentMr
      }
    }
  );

  if (result.matchedCount === 0) {
    console.error("❌ Day 1 not found!");
  } else if (result.modifiedCount === 0) {
    console.log("⚠️  No changes made (intro text might already be removed)");
  } else {
    console.log("✅ Removed introduction text from Day 1 Section 2");
  }

  // Verify
  const updatedDay1 = await CourseDayModel.findOne({ dayNumber: 1 })
    .select('subsections.1.contentEn subsections.1.contentMr')
    .lean();
  
  const updatedEn = updatedDay1?.subsections?.[1]?.contentEn || "";
  const updatedMr = updatedDay1?.subsections?.[1]?.contentMr || "";

  console.log("\n📊 Verification:");
  console.log(`   English starts with: "${updatedEn.substring(0, 50)}..."`);
  console.log(`   Marathi starts with: "${updatedMr.substring(0, 50)}..."`);

  if (!updatedEn.includes("Title: Computer Class Day #1 - How to Use a Computer")) {
    console.log("\n✅ Success! Introduction text removed from English content.");
  } else {
    console.log("\n⚠️  English content still contains intro text.");
  }

  if (!updatedMr.includes("Title: Computer Class Day #1 - How to Use a Computer")) {
    console.log("✅ Success! Introduction text removed from Marathi content.");
  } else {
    console.log("⚠️  Marathi content still contains intro text.");
  }

  await conn.close();
}

removeIntro().catch((err) => {
  console.error("Error:", err.message);
  console.error(err.stack);
  process.exit(1);
}).finally(() => {
  process.exit(0);
});

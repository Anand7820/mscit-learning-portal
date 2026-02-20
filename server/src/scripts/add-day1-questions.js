/**
 * Add 10 specific questions to Day 1 exam in CLOUD database
 * Run: node src/scripts/add-day1-questions.js
 */

require("dotenv").config();
const mongoose = require("mongoose");

const CLOUD_URI = process.env.CLOUD_MONGO_URI;

if (!CLOUD_URI) {
  console.error("Missing CLOUD_MONGO_URI in .env");
  process.exit(1);
}

const CourseDay = require("../models/CourseDay");

const questions = [
  {
    questionEn: "What is the primary function of a UPS in a computer system?",
    questionMr: "संगणक प्रणालीमध्ये UPS चे मुख्य कार्य काय आहे?",
    options: [
      { textEn: "To store large amounts of permanent data", textMr: "मोठ्या प्रमाणात कायम डेटा संग्रहित करणे" },
      { textEn: "To provide battery backup during power outages", textMr: "वीज गेल्यावर बॅटरी बॅकअप प्रदान करणे" },
      { textEn: "To increase the processing speed of the CPU", textMr: "CPU ची प्रक्रिया गती वाढवणे" },
      { textEn: "To connect the computer to a wireless network", textMr: "संगणकाला वायरलेस नेटवर्कशी जोडणे" }
    ],
    correctIndex: 1
  },
  {
    questionEn: "Which of these components is typically found inside the computer cabinet (CPU box)?",
    questionMr: "या घटकांपैकी कोणता संगणक कॅबिनेट (CPU बॉक्स) मध्ये सामान्यतः आढळतो?",
    options: [
      { textEn: "The Motherboard and RAM", textMr: "मदरबोर्ड आणि RAM" },
      { textEn: "The Printer", textMr: "प्रिंटर" },
      { textEn: "The Monitor", textMr: "मॉनिटर" },
      { textEn: "The Mouse", textMr: "माऊस" }
    ],
    correctIndex: 0
  },
  {
    questionEn: "What is the technical name for the main home screen seen after the computer boots up?",
    questionMr: "संगणक बूट केल्यानंतर दिसणाऱ्या मुख्य होम स्क्रीनला तांत्रिक नाव काय आहे?",
    options: [
      { textEn: "Search Box", textMr: "शोध बॉक्स" },
      { textEn: "Start Menu", textMr: "स्टार्ट मेनू" },
      { textEn: "Taskbar", textMr: "टास्कबार" },
      { textEn: "Desktop", textMr: "डेस्कटॉप" }
    ],
    correctIndex: 3
  },
  {
    questionEn: "What is the correct sequence to safely turn on a desktop computer?",
    questionMr: "डेस्कटॉप संगणक सुरक्षितपणे चालू करण्याचा योग्य क्रम काय आहे?",
    options: [
      { textEn: "Main Switch -> UPS -> CPU Cabinet -> Monitor", textMr: "मुख्य स्विच -> UPS -> CPU कॅबिनेट -> मॉनिटर" },
      { textEn: "UPS -> Monitor -> Main Switch -> CPU", textMr: "UPS -> मॉनिटर -> मुख्य स्विच -> CPU" },
      { textEn: "Monitor -> CPU -> UPS -> Main Switch", textMr: "मॉनिटर -> CPU -> UPS -> मुख्य स्विच" },
      { textEn: "Mouse -> Keyboard -> Monitor -> CPU", textMr: "माऊस -> कीबोर्ड -> मॉनिटर -> CPU" }
    ],
    correctIndex: 0
  },
  {
    questionEn: "Which power option puts the computer in a 'low power' state without fully turning it off?",
    questionMr: "कोणता पॉवर पर्याय संगणकाला पूर्णपणे बंद न करता 'कमी वीज' स्थितीत ठेवतो?",
    options: [
      { textEn: "Shut Down", textMr: "शट डाउन" },
      { textEn: "Restart", textMr: "रीस्टार्ट" },
      { textEn: "Sleep Mode", textMr: "स्लीप मोड" },
      { textEn: "Task View", textMr: "टास्क व्यू" }
    ],
    correctIndex: 2
  },
  {
    questionEn: "Where is the Start Button (Windows icon) usually located?",
    questionMr: "स्टार्ट बटण (Windows आयकॉन) सामान्यतः कुठे स्थित आहे?",
    options: [
      { textEn: "Inside the Recycle Bin", textMr: "रीसायकल बिन मध्ये" },
      { textEn: "On the physical Monitor frame", textMr: "भौतिक मॉनिटर फ्रेमवर" },
      { textEn: "In the top right corner of the screen", textMr: "स्क्रीनच्या वरच्या उजव्या कोपऱ्यात" },
      { textEn: "On the left side of the Taskbar", textMr: "टास्कबारच्या डाव्या बाजूला" }
    ],
    correctIndex: 3
  },
  {
    questionEn: "Which icon in the notification area is used to connect to Wi-Fi?",
    questionMr: "अधिसूचना क्षेत्रातील कोणता आयकॉन Wi-Fi शी जोडण्यासाठी वापरला जातो?",
    options: [
      { textEn: "The Message icon", textMr: "मेसेज आयकॉन" },
      { textEn: "The Network/Wi-Fi icon", textMr: "नेटवर्क/Wi-Fi आयकॉन" },
      { textEn: "The Battery icon", textMr: "बॅटरी आयकॉन" },
      { textEn: "The Speaker icon", textMr: "स्पीकर आयकॉन" }
    ],
    correctIndex: 1
  },
  {
    questionEn: "What can you find by typing in the 'Search Box' on the taskbar?",
    questionMr: "टास्कबारवरील 'शोध बॉक्स' मध्ये टाइप करून तुम्हाला काय सापडू शकते?",
    options: [
      { textEn: "Only the current time", textMr: "फक्त वर्तमान वेळ" },
      { textEn: "Apps, files, settings, and internet results", textMr: "अॅप्स, फाइल्स, सेटिंग्ज आणि इंटरनेट निकाल" },
      { textEn: "Physical hardware parts", textMr: "भौतिक हार्डवेअर भाग" },
      { textEn: "Nothing; it is just a decoration", textMr: "काहीही नाही; ते फक्त सजावट आहे" }
    ],
    correctIndex: 1
  },
  {
    questionEn: "How do you adjust the screen brightness in the Windows Action Center?",
    questionMr: "Windows Action Center मध्ये स्क्रीन ब्राइटनेस कशी समायोजित करता येते?",
    options: [
      { textEn: "By right-clicking on the Desktop wallpaper", textMr: "डेस्कटॉप वॉलपेपरवर राइट-क्लिक करून" },
      { textEn: "By pressing all the keys on the keyboard at once", textMr: "कीबोर्डवरील सर्व की एकाच वेळी दाबून" },
      { textEn: "By clicking and dragging the brightness slider", textMr: "ब्राइटनेस स्लायडर क्लिक करून आणि ड्रॅग करून" },
      { textEn: "By turning off the UPS", textMr: "UPS बंद करून" }
    ],
    correctIndex: 2
  },
  {
    questionEn: "What is the name of the area at the bottom right where the clock and icons are located?",
    questionMr: "खालच्या उजव्या बाजूला जेथे घड्याळ आणि आयकॉन्स स्थित आहेत त्या क्षेत्राचे नाव काय आहे?",
    options: [
      { textEn: "System Tray / Notification Area", textMr: "सिस्टम ट्रे / अधिसूचना क्षेत्र" },
      { textEn: "Desktop Icons", textMr: "डेस्कटॉप आयकॉन्स" },
      { textEn: "Start Menu", textMr: "स्टार्ट मेनू" },
      { textEn: "Search Bar", textMr: "शोध बार" }
    ],
    correctIndex: 0
  }
];

async function addQuestions() {
  const conn = mongoose.createConnection(CLOUD_URI);
  await conn.asPromise();
  console.log("Connected to CLOUD database.\n");

  const CourseDayModel = conn.model("CourseDay", CourseDay.schema);

  // Update Day 1 with these questions
  const result = await CourseDayModel.updateOne(
    { dayNumber: 1 },
    {
      $set: {
        exam: {
          durationMinutes: 60,
          questions: questions
        }
      }
    }
  );

  if (result.matchedCount === 0) {
    console.error("❌ Day 1 not found in CLOUD database!");
    await conn.close();
    process.exit(1);
  }

  if (result.modifiedCount === 0) {
    console.log("⚠️  Day 1 found but no changes made (questions might be the same)");
  } else {
    console.log(`✅ Updated Day 1 in CLOUD with ${questions.length} questions`);
  }

  // Verify
  const day1 = await CourseDayModel.findOne({ dayNumber: 1 })
    .select('exam.questions')
    .lean();
  
  const questionCount = day1?.exam?.questions?.length || 0;
  console.log(`\n📊 Verification:`);
  console.log(`   Questions in database: ${questionCount}`);

  if (questionCount === questions.length) {
    console.log(`\n✅ Success! Day 1 now has ${questionCount} questions in cloud database.`);
    console.log(`\nFirst question: "${day1.exam.questions[0].questionEn}"`);
  } else {
    console.log(`\n❌ Mismatch! Expected ${questions.length}, got ${questionCount}.`);
  }

  await conn.close();
}

addQuestions().catch((err) => {
  console.error("Error:", err.message);
  console.error(err.stack);
  process.exit(1);
}).finally(() => {
  process.exit(0);
});

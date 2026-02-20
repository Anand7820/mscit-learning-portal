const CourseDay = require("../models/CourseDay");
const ExamAttempt = require("../models/ExamAttempt");
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const { getDayAvailability } = require("../utils/courseAccess");

const startExam = async (req, res) => {
  try {
    const dayNumber = Number(req.params.dayNumber);
    // Force fresh read from database (no cache) - use select to ensure we get all fields
    const day = await CourseDay.findOne({ dayNumber })
      .select('dayNumber exam.questions exam.durationMinutes')
      .lean();
    
    if (!day) {
      console.error(`[Exam Start] Day ${dayNumber}: NOT FOUND in database`);
      return res.status(404).json({ message: `Day ${dayNumber} not found in database` });
    }

    const questionCount = day.exam?.questions?.length || 0;
    console.log(`[Exam Start] Day ${dayNumber}: Found in DB`);
    console.log(`[Exam Start] Day ${dayNumber}: exam.questions.length = ${questionCount}`);
    
    if (questionCount === 0) {
      console.error(`[Exam Start] Day ${dayNumber}: exam.questions is empty or undefined!`);
    }

    if (!day.exam || !day.exam.questions || day.exam.questions.length === 0) {
      return res.status(400).json({ 
        message: `Day ${dayNumber} has no exam questions. Please add questions in admin panel.` 
      });
    }

    const availability = getDayAvailability(req.user, dayNumber);
    if (availability.status !== "available") {
      return res.status(403).json({ message: "Exam locked" });
    }

    // Check if attempt already exists
    let attempt = await ExamAttempt.findOne({
      student: req.user._id,
      dayNumber
    });

    if (attempt) {
      // If already submitted, delete it and create a fresh attempt (allow retakes)
      if (attempt.submittedAt) {
        await ExamAttempt.deleteOne({ _id: attempt._id });
        attempt = null; // Will create new one below
      }
      // If exists but not submitted, allow them to continue with existing attempt
      // Reset startedAt to now for fresh timer
      if (attempt && !attempt.submittedAt) {
        attempt.startedAt = new Date();
        await attempt.save();
      }
    }

    // Create new attempt if none exists (or if we deleted the submitted one)
    if (!attempt) {
      attempt = await ExamAttempt.create({
        student: req.user._id,
        dayNumber,
        startedAt: new Date(),
        durationMinutes: day.exam.durationMinutes || 60
      });
    }

    const questions = day.exam.questions.map((q) => ({
      questionEn: q.questionEn,
      questionMr: q.questionMr,
      options: q.options
    }));

    console.log(`[Exam Start] Day ${dayNumber}: Returning ${questions.length} questions`);

    return res.json({
      attemptId: attempt._id,
      durationMinutes: attempt.durationMinutes,
      questions
    });
  } catch (error) {
    console.error("Start exam error:", error);
    return res.status(500).json({ 
      message: error.message || "Failed to start exam" 
    });
  }
};

const submitExam = async (req, res) => {
  const { attemptId, answers, password } = req.body;
  if (!attemptId || !Array.isArray(answers)) {
    return res.status(400).json({ message: "Attempt ID and answers required" });
  }
  
  // Verify password
  if (!password) {
    return res.status(400).json({ message: "Password required to submit exam" });
  }
  
  const user = await User.findById(req.user._id);
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  
  const isPasswordValid = await bcrypt.compare(password, user.passwordHash);
  if (!isPasswordValid) {
    return res.status(401).json({ message: "Incorrect password" });
  }

  const attempt = await ExamAttempt.findOne({
    _id: attemptId,
    student: req.user._id
  });
  if (!attempt) {
    return res.status(404).json({ message: "Attempt not found" });
  }
  if (attempt.submittedAt) {
    return res.status(409).json({ message: "Exam already submitted" });
  }

  const day = await CourseDay.findOne({ dayNumber: attempt.dayNumber });
  if (!day) {
    return res.status(404).json({ message: "Day not found" });
  }

  const total = day.exam.questions.length;
  let score = 0;
  day.exam.questions.forEach((q, index) => {
    if (answers[index] === q.correctIndex) {
      score += 1;
    }
  });

  attempt.answers = answers;
  attempt.score = score;
  attempt.total = total;
  attempt.submittedAt = new Date();
  await attempt.save();

  return res.json({
    score,
    total,
    submittedAt: attempt.submittedAt
  });
};

const checkAnswer = async (req, res) => {
  try {
    const { attemptId, questionIndex, answer } = req.body;
    
    if (attemptId === undefined || questionIndex === undefined || answer === undefined) {
      return res.status(400).json({ message: "Attempt ID, question index, and answer required" });
    }

    const attempt = await ExamAttempt.findOne({
      _id: attemptId,
      student: req.user._id
    });
    if (!attempt) {
      return res.status(404).json({ message: "Attempt not found" });
    }
    if (attempt.submittedAt) {
      return res.status(409).json({ message: "Exam already submitted" });
    }

    const day = await CourseDay.findOne({ dayNumber: attempt.dayNumber });
    if (!day) {
      return res.status(404).json({ message: "Day not found" });
    }

    const question = day.exam.questions[questionIndex];
    if (!question) {
      return res.status(404).json({ message: "Question not found" });
    }

    const isCorrect = answer === question.correctIndex;

    return res.json({
      isCorrect,
      correctAnswer: question.correctIndex,
      questionIndex
    });
  } catch (error) {
    console.error("Check answer error:", error);
    return res.status(500).json({ 
      message: error.message || "Failed to check answer" 
    });
  }
};

const examHistory = async (req, res) => {
  const attempts = await ExamAttempt.find({ student: req.user._id })
    .sort({ createdAt: -1 })
    .select("dayNumber score total submittedAt durationMinutes");
  return res.json(attempts);
};

module.exports = { startExam, submitExam, checkAnswer, examHistory };

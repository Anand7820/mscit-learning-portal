const CourseDay = require("../models/CourseDay");
const { getDayAvailability } = require("../utils/courseAccess");
const { extractPracticalStepsFromSection2 } = require("../utils/extractPracticalSteps");

const listDays = async (req, res) => {
  const days = await CourseDay.find().select("dayNumber subsections.titleEn subsections.titleMr");
  const sectionCompletionByDay = req.user?.sectionCompletionByDay || [];
  const result = days
    .sort((a, b) => a.dayNumber - b.dayNumber)
    .map((day) => {
      const availability = getDayAvailability(req.user, day.dayNumber);
      const sections = (day.subsections || []).map((s, i) => ({
        index: i,
        titleEn: s.titleEn || `Section ${i + 1}`,
        titleMr: s.titleMr || `Section ${i + 1}`
      }));
      const dayProgress = sectionCompletionByDay.find((p) => p.dayNumber === day.dayNumber);
      const completedSections = dayProgress?.completedSections || [];
      return {
        dayNumber: day.dayNumber,
        status: availability.status,
        nextUnlockAt: availability.nextUnlockAt || null,
        sections,
        completedSections
      };
    });
  return res.json(result);
};

const getDay = async (req, res) => {
  const dayNumber = Number(req.params.dayNumber);
  const day = await CourseDay.findOne({ dayNumber });
  if (!day) {
    return res.status(404).json({ message: "Day not found" });
  }

  const availability = getDayAvailability(req.user, dayNumber);
  if (availability.status !== "available") {
    return res.status(403).json({ message: "Day locked", details: availability });
  }

  // Keep progress: mark this day (and all before it) as reached so completion doesn't "go away" when moving to next day
  const currentUnlocked = req.user.unlockedUpTo || 0;
  if (dayNumber > currentUnlocked) {
    req.user.unlockedUpTo = dayNumber;
    const now = new Date();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const d = String(now.getDate()).padStart(2, "0");
    req.user.lastUnlockDate = `${now.getFullYear()}-${month}-${d}`;
    if (dayNumber === 30) {
      req.user.needsSecondFee = true;
    }
  }

  req.user.lastAccessAt = new Date();
  await req.user.save();

  // Include saved section completion for this day so "Mark as Complete" state persists when student returns
  const dayProgress = req.user.sectionCompletionByDay?.find((p) => p.dayNumber === dayNumber);
  const completedSections = dayProgress?.completedSections ?? null;

  // Include practical steps and user's completion for this day
  const practicalProgress = req.user.practicalCompletionByDay?.find((p) => p.dayNumber === dayNumber);
  const practicalCompletedSteps = practicalProgress?.completedSteps ?? null;

  // If no stored practicalSteps, derive 2-6 steps from Section 2 content so every day has practicals
  let practicalSteps = (day.practicalSteps && day.practicalSteps.length > 0)
    ? day.practicalSteps
    : [];
  if (practicalSteps.length === 0 && day.subsections && day.subsections[1]) {
    const section2 = day.subsections[1];
    const contentEn = section2.contentEn || "";
    const contentMr = section2.contentMr || "";
    practicalSteps = extractPracticalStepsFromSection2(contentEn, contentMr);
  }

  return res.json({
    ...day.toObject(),
    completedSections,
    practicalSteps,
    practicalCompletedSteps
  });
};

const saveSectionCompletion = async (req, res) => {
  const dayNumber = Number(req.params.dayNumber);
  const { completedSections } = req.body;
  if (!Array.isArray(completedSections)) {
    return res.status(400).json({ message: "completedSections must be an array" });
  }

  const user = req.user;
  if (!user.sectionCompletionByDay) user.sectionCompletionByDay = [];
  const existing = user.sectionCompletionByDay.find((p) => p.dayNumber === dayNumber);
  if (existing) {
    existing.completedSections = completedSections;
  } else {
    user.sectionCompletionByDay.push({ dayNumber, completedSections });
  }
  await user.save();
  return res.json({ ok: true });
};

const savePracticalCompletion = async (req, res) => {
  const dayNumber = Number(req.params.dayNumber);
  const { completedSteps } = req.body;
  if (!Array.isArray(completedSteps)) {
    return res.status(400).json({ message: "completedSteps must be an array" });
  }

  const user = req.user;
  if (!user.practicalCompletionByDay) user.practicalCompletionByDay = [];
  const existing = user.practicalCompletionByDay.find((p) => p.dayNumber === dayNumber);
  if (existing) {
    existing.completedSteps = completedSteps;
  } else {
    user.practicalCompletionByDay.push({ dayNumber, completedSteps });
  }
  await user.save();
  return res.json({ ok: true });
};

module.exports = { listDays, getDay, saveSectionCompletion, savePracticalCompletion };

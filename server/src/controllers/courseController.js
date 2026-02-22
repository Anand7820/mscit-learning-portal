const CourseDay = require("../models/CourseDay");
const { getDayAvailability } = require("../utils/courseAccess");

const listDays = async (req, res) => {
  const days = await CourseDay.find().select("dayNumber");
  const result = days
    .sort((a, b) => a.dayNumber - b.dayNumber)
    .map((day) => {
      const availability = getDayAvailability(req.user, day.dayNumber);
      return {
        dayNumber: day.dayNumber,
        status: availability.status,
        nextUnlockAt: availability.nextUnlockAt || null
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

  return res.json({ ...day.toObject(), completedSections });
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

module.exports = { listDays, getDay, saveSectionCompletion };

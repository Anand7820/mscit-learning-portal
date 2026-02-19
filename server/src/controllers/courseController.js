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

  if (availability.shouldUnlock) {
    req.user.unlockedUpTo = dayNumber;
    const now = new Date();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");
    req.user.lastUnlockDate = `${now.getFullYear()}-${month}-${day}`;
    if (dayNumber === 30) {
      req.user.needsSecondFee = true;
    }
  }

  req.user.lastAccessAt = new Date();
  await req.user.save();

  return res.json(day);
};

module.exports = { listDays, getDay };

const getTodayKey = () => {
  const now = new Date();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return `${now.getFullYear()}-${month}-${day}`;
};

const getNextMidnight = () => {
  const now = new Date();
  const next = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
  return next;
};

const getDayAvailability = () => {
  // Project work: keep all days unlocked.
  return { status: "available" };
};

module.exports = { getDayAvailability };

const express = require("express");
const { listDays, getDay, saveSectionCompletion } = require("../controllers/courseController");
const { authMiddleware } = require("../middlewares/auth");

const router = express.Router();

router.use(authMiddleware);

router.get("/days", listDays);
router.get("/days/:dayNumber", getDay);
router.put("/days/:dayNumber/sections", saveSectionCompletion);

module.exports = router;

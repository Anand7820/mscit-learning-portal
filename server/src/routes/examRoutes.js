const express = require("express");
const { startExam, submitExam, examHistory } = require("../controllers/examController");
const { authMiddleware } = require("../middlewares/auth");

const router = express.Router();

router.use(authMiddleware);

router.get("/history", examHistory);
router.post("/:dayNumber/start", startExam);
router.post("/submit", submitExam);

module.exports = router;

const express = require("express");
const { startExam, submitExam, checkAnswer, examHistory } = require("../controllers/examController");
const { authMiddleware } = require("../middlewares/auth");

const router = express.Router();

router.use(authMiddleware);

router.get("/history", examHistory);
router.post("/:dayNumber/start", startExam);
router.post("/check-answer", checkAnswer);
router.post("/submit", submitExam);

module.exports = router;

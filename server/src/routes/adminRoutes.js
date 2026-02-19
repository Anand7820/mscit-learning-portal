const express = require("express");
const {
  getStats,
  listPending,
  approveStudent,
  rejectStudent,
  markFeesPaid,
  markFeesPart1,
  markFeesPart2,
  unlockDay,
  listStudents,
  getStudentProfile,
  deleteStudent,
  createStudent,
  uploadDayImage,
  testCloudinary,
  createBatch,
  listBatches,
  updateBatch,
  deleteBatch,
  assignStudentToBatch
} = require("../controllers/adminController");
const { authMiddleware, adminOnly } = require("../middlewares/auth");
const uploadCourse = require("../utils/uploadCourse");

const router = express.Router();

router.use(authMiddleware, adminOnly);

router.get("/stats", getStats);
router.get("/pending", listPending);
router.get("/students", listStudents);
router.get("/students/:id", getStudentProfile);
router.post("/students", createStudent);
router.delete("/students/:id", deleteStudent);
router.post("/students/:id/approve", approveStudent);
router.post("/students/:id/reject", rejectStudent);
router.post("/students/:id/fees-paid", markFeesPaid);
router.post("/students/:id/fees-part1", markFeesPart1);
router.post("/students/:id/fees-part2", markFeesPart2);
router.post("/students/:id/unlock-day", unlockDay);
router.post("/course-days/:dayNumber/image", uploadCourse.single("image"), uploadDayImage);
router.get("/cloudinary-test", testCloudinary);

// Batch routes
router.post("/batches", createBatch);
router.get("/batches", listBatches);
router.put("/batches/:id", updateBatch);
router.delete("/batches/:id", deleteBatch);
router.post("/students/:studentId/assign-batch", assignStudentToBatch);

module.exports = router;

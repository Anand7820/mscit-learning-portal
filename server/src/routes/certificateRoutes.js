const express = require("express");
const { getEligibility, downloadCertificate } = require("../controllers/certificateController");
const { authMiddleware } = require("../middlewares/auth");

const router = express.Router();

router.use(authMiddleware);

router.get("/status", getEligibility);
router.get("/download", downloadCertificate);

module.exports = router;

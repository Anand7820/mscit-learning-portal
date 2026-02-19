const express = require("express");
const { signup, login, completeProfile, me } = require("../controllers/authController");
const { authMiddleware } = require("../middlewares/auth");
const upload = require("../utils/upload");

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.get("/me", authMiddleware, me);
router.post("/complete-profile", authMiddleware, upload.fields([{ name: "photo", maxCount: 1 }, { name: "signature", maxCount: 1 }]), completeProfile);

module.exports = router;

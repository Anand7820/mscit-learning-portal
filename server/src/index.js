const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDb = require("./config/db");
const { ensureAdminUser } = require("./utils/ensureAdmin");
const { ensureCourseDays } = require("./utils/seedCourse");
const authRoutes = require("./routes/authRoutes");
const adminRoutes = require("./routes/adminRoutes");
const courseRoutes = require("./routes/courseRoutes");
const examRoutes = require("./routes/examRoutes");
const certificateRoutes = require("./routes/certificateRoutes");

dotenv.config();

if (!process.env.JWT_SECRET) {
  process.env.JWT_SECRET = "dev_secret";
  console.warn("JWT_SECRET not set. Using default dev_secret");
}

const app = express();

// CORS configuration
const corsOptions = {
  origin: process.env.CLIENT_URL || "*",
  credentials: true,
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "MS-CIT Portal API running" });
});

app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/courses", courseRoutes);
app.use("/api/exams", examRoutes);
app.use("/api/certificate", certificateRoutes);

const PORT = process.env.PORT || 5000;

// Start HTTP server immediately so Railway's proxy gets a response (avoids "Application failed to respond")
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});

// Connect DB and seed in background so app is reachable right away
connectDb()
  .then(async () => {
    await ensureAdminUser();
    await ensureCourseDays();
  })
  .catch((err) => {
    console.error("DB connection error:", err);
    process.exit(1);
  });

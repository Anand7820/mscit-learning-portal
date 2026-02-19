const bcrypt = require("bcryptjs");
const User = require("../models/User");

const ensureAdminUser = async () => {
  const adminEmail = process.env.ADMIN_EMAIL || "admin@mscit.com";
  const adminPassword = process.env.ADMIN_PASSWORD || "admin123";
  if (!process.env.ADMIN_EMAIL || !process.env.ADMIN_PASSWORD) {
    console.log("Admin credentials not set in env. Using default admin@mscit.com / admin123");
  }

  const existingAdmin = await User.findOne({ role: "admin" });
  if (existingAdmin) {
    return;
  }

  const passwordHash = await bcrypt.hash(adminPassword, 10);
  await User.create({
    email: adminEmail,
    passwordHash,
    role: "admin",
    status: "approved",
    profileCompleted: true,
    profile: { name: "Admin" }
  });

  console.log("Admin user created");
};

module.exports = { ensureAdminUser };

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const generateToken = (user) => {
  return jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
    expiresIn: "7d"
  });
};

const generateStudentNumber = async () => {
  let studentNumber;
  let isUnique = false;
  while (!isUnique) {
    const year = new Date().getFullYear();
    const randomPart = Math.floor(1000 + Math.random() * 9000);
    studentNumber = `${year}${String(randomPart).padStart(8, "0")}`;
    const exists = await User.findOne({ studentNumber });
    if (!exists) {
      isUnique = true;
    }
  }
  return studentNumber;
};

const signup = async (req, res) => {
  try {
    const { email, password, name } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: "Email and password required" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: "Email already registered" });
    }

    const passwordHash = await bcrypt.hash(password, 10);
    const studentNumber = await generateStudentNumber();
    const user = await User.create({
      email,
      passwordHash,
      role: "student",
      status: "pending",
      studentNumber,
      profile: {
        name: name || ""
      }
    });

    return res.status(201).json({
      message: "Signup successful. Await admin approval.",
      userId: user._id
    });
  } catch (error) {
    return res.status(500).json({ message: "Signup failed" });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: "Email and password required" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.passwordHash);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    if (user.role === "student" && user.status !== "approved") {
      return res.status(403).json({ message: "Awaiting admin approval" });
    }

    const token = generateToken(user);
    return res.json({
      token,
      user: {
        id: user._id,
        role: user.role,
        status: user.status,
        profileCompleted: user.profileCompleted,
        profile: user.profile
      }
    });
  } catch (error) {
    return res.status(500).json({ message: "Login failed" });
  }
};

const completeProfile = async (req, res) => {
  try {
    const user = req.user;
    if (user.role !== "student") {
      return res.status(403).json({ message: "Students only" });
    }

    const {
      name,
      age,
      fatherName,
      motherName,
      surname,
      dob,
      gender,
      maritalStatus,
      phoneNumber,
      language,
      address,
      education,
      selectedCourse
    } = req.body;

    if (!name) {
      return res.status(400).json({ message: "Name is required" });
    }

    const photoFile = req.files?.photo?.[0] || req.files?.photo || req.file;
    const signatureFile = req.files?.signature?.[0] || req.files?.signature;
    
    const uploadedPhotoUrl =
      photoFile?.path || photoFile?.secure_url || photoFile?.url || "";
    const photoUrl = uploadedPhotoUrl || user.profile.photoUrl;

    const uploadedSignatureUrl =
      signatureFile?.path || signatureFile?.secure_url || signatureFile?.url || "";
    const signatureUrl = uploadedSignatureUrl || user.profile.signatureUrl;

    user.profile = {
      photoUrl,
      signatureUrl,
      name,
      age,
      fatherName,
      motherName,
      surname,
      dob,
      gender,
      maritalStatus,
      phoneNumber,
      language,
      address,
      education,
      selectedCourse
    };
    user.profileCompleted = true;
    if (!user.unlockedUpTo || user.unlockedUpTo < 0) {
      user.unlockedUpTo = 0;
    }
    await user.save();

    return res.json({ message: "Profile completed", profile: user.profile });
  } catch (error) {
    return res.status(500).json({ message: "Profile update failed" });
  }
};

const me = async (req, res) => {
  const user = req.user;
  return res.json({
    id: user._id,
    role: user.role,
    status: user.status,
    profileCompleted: user.profileCompleted,
    profile: user.profile,
      feesPaid: user.feesPaid,
      feesPart1Paid: user.feesPart1Paid,
      feesPart2Paid: user.feesPart2Paid,
      needsSecondFee: user.needsSecondFee,
    unlockedUpTo: user.unlockedUpTo,
    manualUnlockedDays: user.manualUnlockedDays
  });
};

module.exports = { signup, login, completeProfile, me };

const bcrypt = require("bcryptjs");
const User = require("../models/User");
const CourseDay = require("../models/CourseDay");
const Batch = require("../models/Batch");
const { cloudinary } = require("../config/cloudinary");

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


const getStats = async (req, res) => {
  const totalStudents = await User.countDocuments({ role: "student" });
  const activeStudents = await User.countDocuments({
    role: "student",
    status: "approved"
  });
  const pendingStudents = await User.countDocuments({
    role: "student",
    status: "pending"
  });
  const needsSecondFee = await User.countDocuments({
    role: "student",
    needsSecondFee: true
  });
  return res.json({ totalStudents, activeStudents, pendingStudents, needsSecondFee });
};

const listPending = async (req, res) => {
  const students = await User.find({ role: "student", status: "pending" }).select(
    "email status createdAt profile.name profile.photoUrl profile.signatureUrl studentNumber batch"
  ).populate("batch", "name");
  for (let student of students) {
    if (!student.studentNumber) {
      student.studentNumber = await generateStudentNumber();
      await student.save();
    }
  }
  const updatedStudents = await User.find({ role: "student", status: "pending" }).select(
    "email status createdAt profile.name profile.photoUrl profile.signatureUrl studentNumber batch"
  ).populate("batch", "name");
  return res.json(updatedStudents);
};

const approveStudent = async (req, res) => {
  const student = await User.findById(req.params.id);
  if (!student || student.role !== "student") {
    return res.status(404).json({ message: "Student not found" });
  }
  student.status = "approved";
  await student.save();
  return res.json({ message: "Student approved" });
};

const rejectStudent = async (req, res) => {
  const student = await User.findById(req.params.id);
  if (!student || student.role !== "student") {
    return res.status(404).json({ message: "Student not found" });
  }
  student.status = "rejected";
  await student.save();
  return res.json({ message: "Student rejected" });
};

const markFeesPaid = async (req, res) => {
  const student = await User.findById(req.params.id);
  if (!student || student.role !== "student") {
    return res.status(404).json({ message: "Student not found" });
  }
  student.feesPart2Paid = true;
  student.feesPaid = true;
  student.needsSecondFee = false;
  await student.save();
  return res.json({ message: "Fees marked as paid" });
};

const markFeesPart1 = async (req, res) => {
  const student = await User.findById(req.params.id);
  if (!student || student.role !== "student") {
    return res.status(404).json({ message: "Student not found" });
  }
  student.feesPart1Paid = true;
  await student.save();
  return res.json({ message: "Fees part 1 marked as paid" });
};

const markFeesPart2 = async (req, res) => {
  const student = await User.findById(req.params.id);
  if (!student || student.role !== "student") {
    return res.status(404).json({ message: "Student not found" });
  }
  student.feesPart2Paid = true;
  student.feesPaid = true;
  student.needsSecondFee = false;
  await student.save();
  return res.json({ message: "Fees part 2 marked as paid" });
};

const unlockDay = async (req, res) => {
  const { dayNumber } = req.body;
  const student = await User.findById(req.params.id);
  if (!student || student.role !== "student") {
    return res.status(404).json({ message: "Student not found" });
  }
  if (!dayNumber || dayNumber < 1 || dayNumber > 50) {
    return res.status(400).json({ message: "Invalid day number" });
  }
  if (!student.manualUnlockedDays.includes(dayNumber)) {
    student.manualUnlockedDays.push(dayNumber);
  }
  await student.save();
  return res.json({ message: `Day ${dayNumber} unlocked` });
};

const listStudents = async (req, res) => {
  const students = await User.find({ role: "student" }).select(
    "email status profile profileCompleted feesPaid feesPart1Paid feesPart2Paid needsSecondFee unlockedUpTo manualUnlockedDays studentNumber createdAt batch"
  ).populate("batch", "name");
  for (let student of students) {
    if (!student.studentNumber) {
      student.studentNumber = await generateStudentNumber();
      await student.save();
    }
  }
  const updatedStudents = await User.find({ role: "student" }).select(
    "email status profile profileCompleted feesPaid feesPart1Paid feesPart2Paid needsSecondFee unlockedUpTo manualUnlockedDays studentNumber createdAt batch"
  ).populate("batch", "name");
  return res.json(updatedStudents);
};

const getStudentProfile = async (req, res) => {
  const student = await User.findById(req.params.id).select(
    "email status profile profileCompleted feesPaid unlockedUpTo manualUnlockedDays"
  );
  if (!student) {
    return res.status(404).json({ message: "Student not found" });
  }
  return res.json(student);
};

const deleteStudent = async (req, res) => {
  const student = await User.findById(req.params.id);
  if (!student || student.role !== "student") {
    return res.status(404).json({ message: "Student not found" });
  }
  await student.deleteOne();
  return res.json({ message: "Student deleted" });
};

const uploadDayImage = async (req, res) => {
  const dayNumber = Number(req.params.dayNumber);
  if (!dayNumber || dayNumber < 1 || dayNumber > 50) {
    return res.status(400).json({ message: "Invalid day number" });
  }
  const uploadedUrl =
    req.file?.path || req.file?.secure_url || req.file?.url || "";
  if (!uploadedUrl) {
    return res.status(400).json({
      message: "Image upload failed. Check Cloudinary configuration."
    });
  }
  const day = await CourseDay.findOneAndUpdate(
    { dayNumber },
    { imageUrl: uploadedUrl },
    { new: true }
  );
  if (!day) {
    return res.status(404).json({ message: "Day not found" });
  }
  return res.json({ message: "Day image updated", imageUrl: day.imageUrl });
};

const createStudent = async (req, res) => {
  try {
    const { email, password, name, autoApprove } = req.body;
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
      status: autoApprove ? "approved" : "pending",
      studentNumber,
      profile: {
        name: name || ""
      }
    });

    return res.status(201).json({
      message: `Student created successfully. Status: ${user.status}`,
      student: {
        id: user._id,
        email: user.email,
        studentNumber: user.studentNumber,
        status: user.status
      }
    });
  } catch (error) {
    return res.status(500).json({ message: "Failed to create student" });
  }
};

const testCloudinary = async (req, res) => {
  try {
    const result = await cloudinary.api.ping();
    return res.json({ ok: true, result });
  } catch (error) {
    return res.status(500).json({ ok: false, message: error.message });
  }
};

// Batch Management Functions
const createBatch = async (req, res) => {
  try {
    const { name, description, capacity, startDate, endDate } = req.body;
    if (!name) {
      return res.status(400).json({ message: "Batch name is required" });
    }

    const existingBatch = await Batch.findOne({ name });
    if (existingBatch) {
      return res.status(409).json({ message: "Batch with this name already exists" });
    }

    const batch = await Batch.create({
      name,
      description: description || "",
      capacity: capacity || 0,
      startDate: startDate ? new Date(startDate) : null,
      endDate: endDate ? new Date(endDate) : null,
      isActive: true
    });

    return res.status(201).json({
      message: "Batch created successfully",
      batch
    });
  } catch (error) {
    return res.status(500).json({ message: "Failed to create batch", error: error.message });
  }
};

const listBatches = async (req, res) => {
  try {
    const batches = await Batch.find().sort({ createdAt: -1 });
    const batchesWithCount = await Promise.all(
      batches.map(async (batch) => {
        const studentCount = await User.countDocuments({ batch: batch._id, role: "student" });
        return {
          ...batch.toObject(),
          studentCount
        };
      })
    );
    return res.json(batchesWithCount);
  } catch (error) {
    return res.status(500).json({ message: "Failed to fetch batches", error: error.message });
  }
};

const updateBatch = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, capacity, startDate, endDate, isActive } = req.body;

    const batch = await Batch.findById(id);
    if (!batch) {
      return res.status(404).json({ message: "Batch not found" });
    }

    if (name && name !== batch.name) {
      const existingBatch = await Batch.findOne({ name });
      if (existingBatch) {
        return res.status(409).json({ message: "Batch with this name already exists" });
      }
      batch.name = name;
    }

    if (description !== undefined) batch.description = description;
    if (capacity !== undefined) batch.capacity = capacity;
    if (startDate !== undefined) batch.startDate = startDate ? new Date(startDate) : null;
    if (endDate !== undefined) batch.endDate = endDate ? new Date(endDate) : null;
    if (isActive !== undefined) batch.isActive = isActive;

    await batch.save();
    return res.json({ message: "Batch updated successfully", batch });
  } catch (error) {
    return res.status(500).json({ message: "Failed to update batch", error: error.message });
  }
};

const deleteBatch = async (req, res) => {
  try {
    const { id } = req.params;
    const batch = await Batch.findById(id);
    if (!batch) {
      return res.status(404).json({ message: "Batch not found" });
    }

    const studentCount = await User.countDocuments({ batch: id });
    if (studentCount > 0) {
      return res.status(400).json({
        message: `Cannot delete batch. ${studentCount} student(s) are assigned to this batch. Please reassign them first.`
      });
    }

    await batch.deleteOne();
    return res.json({ message: "Batch deleted successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Failed to delete batch", error: error.message });
  }
};

const assignStudentToBatch = async (req, res) => {
  try {
    const { studentId } = req.params;
    const { batchId } = req.body;

    const student = await User.findById(studentId);
    if (!student || student.role !== "student") {
      return res.status(404).json({ message: "Student not found" });
    }

    if (batchId) {
      const batch = await Batch.findById(batchId);
      if (!batch) {
        return res.status(404).json({ message: "Batch not found" });
      }
      student.batch = batchId;
    } else {
      student.batch = null;
    }

    await student.save();
    return res.json({
      message: batchId ? "Student assigned to batch successfully" : "Student removed from batch successfully",
      student
    });
  } catch (error) {
    return res.status(500).json({ message: "Failed to assign student to batch", error: error.message });
  }
};

module.exports = {
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
};

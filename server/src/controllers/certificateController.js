const PDFDocument = require("pdfkit");
const Certificate = require("../models/Certificate");
const ExamAttempt = require("../models/ExamAttempt");

const FIFTEEN_DAYS_MS = 15 * 24 * 60 * 60 * 1000;

const getEligibility = async (req, res) => {
  const latestAttempt = await ExamAttempt.findOne({
    student: req.user._id,
    submittedAt: { $exists: true, $ne: null }
  }).sort({ submittedAt: -1 });

  if (!latestAttempt) {
    return res.json({ eligible: false, reason: "No exam completed yet" });
  }

  const eligibleAt = new Date(latestAttempt.submittedAt.getTime() + FIFTEEN_DAYS_MS);
  const eligible = Date.now() >= eligibleAt.getTime();
  return res.json({ eligible, eligibleAt });
};

const downloadCertificate = async (req, res) => {
  const latestAttempt = await ExamAttempt.findOne({
    student: req.user._id,
    submittedAt: { $exists: true, $ne: null }
  }).sort({ submittedAt: -1 });

  if (!latestAttempt) {
    return res.status(400).json({ message: "No exam completed yet" });
  }

  const eligibleAt = new Date(latestAttempt.submittedAt.getTime() + FIFTEEN_DAYS_MS);
  if (Date.now() < eligibleAt.getTime()) {
    return res.status(403).json({
      message: "Certificate not available yet",
      eligibleAt
    });
  }

  let certificate = await Certificate.findOne({ student: req.user._id });
  if (!certificate) {
    const uniqueId = `CERT-${Date.now().toString(36).toUpperCase()}`;
    certificate = await Certificate.create({
      student: req.user._id,
      certificateId: uniqueId,
      issuedAt: new Date(),
      courseName: req.user.profile?.selectedCourse || "MS-CIT",
      examAttempt: latestAttempt._id
    });
  }

  const doc = new PDFDocument({ size: "A4", margin: 50 });
  res.setHeader("Content-Type", "application/pdf");
  res.setHeader(
    "Content-Disposition",
    `attachment; filename=certificate-${certificate.certificateId}.pdf`
  );
  doc.pipe(res);

  doc.fontSize(22).text("Certificate of Completion", { align: "center" });
  doc.moveDown();
  doc.fontSize(14).text(`Student Name: ${req.user.profile?.name || ""}`);
  doc.text(`Course Name: ${certificate.courseName}`);
  doc.text(`Date: ${certificate.issuedAt.toDateString()}`);
  doc.text(`Certificate ID: ${certificate.certificateId}`);
  doc.moveDown();
  doc.fontSize(12).text("Congratulations on completing the course!", {
    align: "center"
  });
  doc.end();
};

module.exports = { getEligibility, downloadCertificate };

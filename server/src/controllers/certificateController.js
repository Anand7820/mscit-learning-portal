const PDFDocument = require("pdfkit");
const Certificate = require("../models/Certificate");
const ExamAttempt = require("../models/ExamAttempt");

// Certificate is available as soon as the student completes Day 20 (submitted Day 20 exam)
const CERTIFICATE_DAY = 20;

const getEligibility = async (req, res) => {
  const day20Attempt = await ExamAttempt.findOne({
    student: req.user._id,
    dayNumber: CERTIFICATE_DAY,
    submittedAt: { $exists: true, $ne: null }
  });

  const eligible = !!day20Attempt;
  return res.json({ eligible, reason: eligible ? null : "Complete Day 20 exam to get your certificate" });
};

const downloadCertificate = async (req, res) => {
  const day20Attempt = await ExamAttempt.findOne({
    student: req.user._id,
    dayNumber: CERTIFICATE_DAY,
    submittedAt: { $exists: true, $ne: null }
  });

  if (!day20Attempt) {
    return res.status(403).json({
      message: "Complete Day 20 exam to get your certificate"
    });
  }

  let certificate = await Certificate.findOne({ student: req.user._id });
  if (!certificate) {
    const uniqueId = `CERT-${Date.now().toString(36).toUpperCase()}`;
    const verificationCode = `VC${Date.now().toString(36).toUpperCase().slice(-6)}`;
    certificate = await Certificate.create({
      student: req.user._id,
      certificateId: uniqueId,
      verificationCode,
      issuedAt: new Date(),
      courseName: req.user.profile?.selectedCourse || "MS-CIT",
      examAttempt: day20Attempt._id
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
  if (certificate.verificationCode) {
    doc.fontSize(10).text(`Verification code: ${certificate.verificationCode}`, { opacity: 0.8 });
  }
  doc.moveDown();
  doc.fontSize(12).text("Congratulations on completing the course!", {
    align: "center"
  });
  doc.end();
};

module.exports = { getEligibility, downloadCertificate };

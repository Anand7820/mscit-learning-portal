const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const { cloudinary, configureCloudinary } = require("../config/cloudinary");

const hasCloudinaryCreds =
  process.env.CLOUDINARY_CLOUD_NAME &&
  process.env.CLOUDINARY_API_KEY &&
  process.env.CLOUDINARY_API_SECRET;

let storage;
if (hasCloudinaryCreds) {
  configureCloudinary();
  storage = new CloudinaryStorage({
    cloudinary,
    params: {
      folder: "mscit-portal/course-days",
      allowed_formats: ["jpg", "jpeg", "png"]
    }
  });
} else {
  console.warn("Cloudinary not configured. Course images will be skipped.");
  storage = multer.memoryStorage();
}

const uploadCourse = multer({ storage });

module.exports = uploadCourse;

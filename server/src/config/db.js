const mongoose = require("mongoose");

const connectDb = async () => {
  const mongoUri =
    process.env.MONGO_URI || "mongodb://127.0.0.1:27017/mscit_portal";
  if (!process.env.MONGO_URI) {
    console.warn("MONGO_URI not set. Using default local MongoDB URI.");
  }
  try {
    await mongoose.connect(mongoUri);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error.message);
    throw error;
  }
};

module.exports = connectDb;

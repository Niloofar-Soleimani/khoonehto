import mongoose from "mongoose";

async function Contect() {
  if (mongoose.connection.readyState === 1) {
    return;
  }

  try {
    await mongoose.connect(process.env.URL);
    console.log("connected to DB");
    console.log("URL exists:", !!process.env.URL);
  } catch (error) {
    console.error("MongoDB connection error:", error);
    throw error;
  }
}

export default Contect;

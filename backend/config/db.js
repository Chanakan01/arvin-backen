// backend/config/db.js
import mongoose from "mongoose";

// ฟังก์ชันเชื่อมต่อ MongoDB
export async function connectDB() {
  try {
    const uri = process.env.MONGODB_URI; // ดึงจาก Environment ของ Render
    if (!uri) {
      console.error("❌ ไม่พบค่า MONGODB_URI ใน Environment");
      throw new Error("MONGODB_URI is missing");
    }

    await mongoose.connect(uri, {
      // ตัวเลือกพื้นฐาน (MongoDB driver v4+)
      // ไม่ต้องใส่ useNewUrlParser/useUnifiedTopology แล้ว
    });

    console.log("✅ MongoDB connected successfully");
  } catch (err) {
    console.error("❌ MongoDB connection error:", err.message);
    // ถ้าเชื่อมไม่ได้ ให้หยุดโปรเซส (Render จะลอง restart ให้)
    process.exit(1);
  }
}

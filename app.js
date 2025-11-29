// app.js (ระดับ root)
// 👉 ถ้าในไฟล์คุณใช้ require อยู่ บอกฉันอีกทีได้ เดี๋ยวแปลงให้เป็น CommonJS ให้
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./backend/config/db.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// 🧠 ทดสอบ endpoint ง่าย ๆ
app.get("/", (req, res) => {
  res.send("Arvin Backend is running 🚀");
});

// TODO: ตรงนี้ภายหลังเราจะ import routes ต่าง ๆ เช่น userRoutes, adminRoutes
// import userRoutes from "./backend/routes/userRoutes.js";
// app.use("/api/users", userRoutes);

// ⭐ เรียกต่อ MongoDB แล้วค่อยเริ่มฟังพอร์ต
const PORT = process.env.PORT || 5000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Server is running on port ${PORT}`);
  });
});

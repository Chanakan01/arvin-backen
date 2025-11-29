import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB – (เดี๋ยวคุณใส่จริงใน Render)
mongoose.connect(process.env.MONGO_URI || "")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("MongoDB error: ", err.message));

// ทดสอบ API
app.get("/", (req, res) => {
  res.json({ message: "Arvin Backend API is running!" });
});

// ล็อกอินแอดมินเบื้องต้น (ยังไม่แฮช)
app.post("/api/admin/login", (req, res) => {
  const { username, password } = req.body;
  if (username === "admin" && password === "Aa112233.") {
    return res.json({ success: true, token: "TEST-TOKEN" });
  }
  res.status(401).json({ success: false, message: "ข้อมูลไม่ถูกต้อง" });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});

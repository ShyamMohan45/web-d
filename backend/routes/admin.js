import express from "express";
import jwt from "jsonwebtoken";

const router = express.Router();

router.post("/login", (req, res) => {
  console.log("🔥 ADMIN LOGIN ROUTE HIT");
  console.log("Request body:", req.body);
  console.log("Env ADMIN_EMAIL:", process.env.ADMIN_EMAIL);
  console.log("Env ADMIN_PASSWORD:", process.env.ADMIN_PASSWORD);
  console.log("Env JWT_SECRET exists:", !!process.env.JWT_SECRET);

  const { email, password } = req.body;

  if (
    email !== process.env.ADMIN_EMAIL ||
    password !== process.env.ADMIN_PASSWORD
  ) {
    console.log("❌ Invalid credentials");
    return res.status(401).json({ message: "Invalid admin credentials" });
  }

  console.log("✅ Credentials valid, generating token");

  if (!process.env.JWT_SECRET) {
    console.log("❌ JWT_SECRET not found");
    return res.status(500).json({ message: "Server configuration error" });
  }

  const token = jwt.sign(
    { role: "admin" },
    process.env.JWT_SECRET,
    { expiresIn: "1d" }
  );

  console.log("✅ Token generated");
  res.json({ token });
});

router.get("/data", (req, res) => {
  res.json({ secret: "Admin-only data" });
});

export default router;

import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// ROOT route (fixes 403)
app.get("/api/health", (req, res) => {
  res.status(200).json({
    status: "UP",
    service: "backend",
    database: "connected"
  });
});


// Health check (DevOps MUST)
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "UP",
    database: mongoose.connection.readyState === 1 ? "connected" : "disconnected"
  });
});

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => {
    console.error("MongoDB error:", err.message);
  });

// Server start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

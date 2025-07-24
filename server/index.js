import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
import PostRouter from './routes/Posts.js';
import GenerateImageRouter from './routes/GenerateImage.js';

import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables
dotenv.config({ path: path.resolve(__dirname, '../.env') });

const app = express();

// Middleware
app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/post", PostRouter);
app.use("/api/generateImage", GenerateImageRouter);

// Default API welcome route
app.get("/api", (req, res) => {
  res.status(200).json({
    message: "Welcome to the AI Image Generation API",
  });
});

// Error handler middleware
app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || 'Something went wrong';
  return res.status(status).json({
    success: false,
    status,
    message,
  });
});

// Serve client build (React frontend)
const buildPath = path.join(__dirname, 'client_build');
app.use(express.static(buildPath));

// Fallback to index.html for React Router
app.get('*', (req, res) => {
  res.sendFile(path.join(buildPath, 'index.html'));
});

// Connect to MongoDB
const connectDB = async () => {
  try {
    mongoose.set("strictQuery", true);
    await mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("✅ MongoDB connected");
  } catch (err) {
    console.error("❌ Failed to connect to MongoDB");
    console.error(err);
    process.exit(1);
  }
};

// Start server
const startServer = async () => {
  try {
    await connectDB();
    const PORT = process.env.PORT || 8080;
    app.listen(PORT, () => console.log(`🚀 Server started on port ${PORT}`));
  } catch (error) {
    console.error("❌ Error starting server:", error);
  }
};

startServer();

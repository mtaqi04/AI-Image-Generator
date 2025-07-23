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

dotenv.config({ path: path.resolve(__dirname, '../.env') });


const app = express();
app.use(cors());
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({extended: true}));

// error handlers
app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || 'Something went wrong';
    return res.status(status).json({
        success: false,
        status,
        message,
    });
});

app.use("/api/post", PostRouter);
app.use("/api/generateImage", GenerateImageRouter);

//Default get
app.get("/", async (req, res) => {
    res.status(200).json({
        message: "Welcome to the AI Image Generation API",
    });
});

// function to connect to mongodb
const connectDB = async () => {
    try {
        mongoose.set("strictQuery", true);
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("MongoDB connected");
    } catch (err) {
        console.error("Failed to connect to DB");
        console.error(err);
        process.exit(1); // exit the process if DB connection fails
    }
};




//function to start the server
const startServer = async () => {
    try {
        await connectDB();
        app.listen(8080, () => console.log("Server started on port 8080"));
    } catch (error) {
        console.error("Error starting server:", error);
    }
};

startServer();
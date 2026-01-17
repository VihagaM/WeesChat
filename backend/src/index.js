import express from "express";
import dotenv from 'dotenv';
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import { connectDB } from "./lib/db.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import { ENV } from "./lib/env.js";
import { app, server } from "./lib/socket.js";


dotenv.config();

const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors({ origin: ENV.CLIENT_URL, credentials: true }));
app.use(cookieParser());

// 🔥 Correct place — set limit ONCE
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes);

// Connect to DB first, then start server
connectDB()
    .then(() => {
        server.listen(PORT, () => {
            console.log("Server running on PORT:", PORT);
        });
    })
    .catch((err) => {
        console.error("Failed to start server:", err);
    });

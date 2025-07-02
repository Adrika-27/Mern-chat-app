
require("dotenv").config();

// Load environment variables
require("dotenv").config();

// Import required modules
const express = require("express");
const cors = require("cors");

const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch(err => console.error("❌ MongoDB connection failed", err));

console.log("MONGO_URI from env:", process.env.MONGO_URI);

const app = express(); // create an express app

// Middleware
app.use(cors()); // allow requests from other domains (like frontend)
app.use(express.json()); // allow JSON body parsing

// Simple test route
app.get("/", (req, res) => {
  res.send("✅ Chat App Backend Running");
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server started on http://localhost:${PORT}`);
});

const User = require("./models/User");
console.log("✅ User model loaded");


//const app = express();
require("dotenv").config();


// Connect MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch(err => console.error("❌ MongoDB connection failed", err));

// Middleware to parse JSON
app.use(express.json());

// 👉 Add this line:
app.use("/api/user", require("./routes/userRoutes"));

app.get("/", (req, res) => {
  res.send("✅ Chat App Backend Running");
});

app.listen(process.env.PORT, () =>
  console.log(`🚀 Server started on http://localhost:${process.env.PORT}`)
);

const mongoose = require("mongoose");

// Define the shape of a user document
const userSchema = new mongoose.Schema({
  name: {
    type: String,           // must be a string
    required: true,         // cannot be missing
    trim: true              // removes extra spaces
  },
  email: {
    type: String,
    required: true,
    unique: true,           // no duplicate emails allowed
    lowercase: true         // convert to lowercase before saving
  },
  password: {
    type: String,
    required: true
  }
}, {
  timestamps: true           // auto-add createdAt and updatedAt fields
});

// Export this model so we can use it in other files
module.exports = mongoose.model("User", userSchema);

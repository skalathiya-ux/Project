const mongoose = require("mongoose");

const fileSchema = new mongoose.Schema({
  filename: String,
  path: String,
  size: Number,
  privacy: String, 
  uploaded_by: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  uploaded_at: { type: Date, default: Date.now }
});

const FileModel = mongoose.model("File", fileSchema);

module.exports = FileModel;

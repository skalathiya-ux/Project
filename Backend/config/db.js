const mongoose = require("mongoose");

function connectDB() {
  mongoose
    .connect(process.env.MONGO_URL || "mongodb://127.0.0.1:27017/filehost")
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.log("DB error", err));
}

module.exports = connectDB;

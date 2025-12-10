const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

const authRoutes = require("./routes/authRoutes");
const fileRoutes = require("./routes/fileRoutes");
app.use("/api", authRoutes);
app.use("/api", fileRoutes);

app.listen(8000, () => {
  console.log("Server started on port", 8000);
});

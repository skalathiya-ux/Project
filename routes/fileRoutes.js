const express = require("express");
const multer = require("multer");
const path = require("path");

const router = express.Router();

const upload = multer({
  dest: path.join(__dirname, "..", "uploads"),
  limits: { fileSize: 20 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    if (file.originalname.endsWith(".pdf") || file.originalname.endsWith(".mp4")) {
      cb(null, true);
    } else {
      cb(null, false);
    }
  }
});

// POST /api/upload  
router.post("/upload", upload.single("file"), ()=>{});

// GET /api/public-files
router.get("/public-files", ()=>{});

// GET /api/my-files  
router.get("/my-files", ()=>{});

// GET /api/files/:id/download
router.get("/files/:id/download",()=>{});

// DELETE /api/files/:id  
router.delete("/files/:id", ()=>{});

module.exports = router;

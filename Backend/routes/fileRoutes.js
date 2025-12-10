const express = require("express");
const multer = require("multer");
const path = require("path");
const authMiddleware = require("../middleware/auth");
const fileController = require("../controllers/fileController");
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
router.post("/upload",authMiddleware, upload.single("file"), fileController.uploadFile);

// GET /api/public-files
router.get("/public-files", fileController.getPublicFiles);

// GET /api/my-files  
router.get("/my-files",authMiddleware, fileController.getMyFiles);

// GET /api/files/:id/download
router.get("/files/:id/download",fileController.downloadFile);

// DELETE /api/files/:id  
router.delete("/files/:id",authMiddleware, fileController.deleteFile);

module.exports = router;

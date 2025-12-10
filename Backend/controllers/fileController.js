const FileModel = require("../models/FileModel");
const fs = require("fs");

const fileController = {
  uploadFile: async (req, res) => {
    if (!req.file) {
      return res.json({ error: "File not uploaded or wrong format/size" });
    }

    const privacy = req.body.privacy || "public";

    const fileDoc = new FileModel({
      filename: req.file.originalname,
      path: req.file.path,
      size: req.file.size,
      privacy: privacy,
      uploaded_by: req.userId
    });

    await fileDoc.save();

    res.json({ message: "File uploaded successfully" });
  },

  getPublicFiles: async (req, res) => {
    const list = await FileModel.find({ privacy: "public" });
    res.json(list);
  },

  getMyFiles: async (req, res) => {
    const list = await FileModel.find({ uploaded_by: req.userId });
    res.json(list);
  },

  downloadFile: async (req, res) => {
    const id = req.params.id;
    const file = await FileModel.findById(id);

    if (!file) {
      return res.json({ error: "File not found" });
    }

    res.download(file.path, file.filename);
  },

  deleteFile: async (req, res) => {
    const id = req.params.id;
    const file = await FileModel.findById(id);

    if (!file) {
      return res.json({ error: "File not found" });
    }

    if (String(file.uploaded_by) !== String(req.userId)) {
      return res.json({ error: "You cannot delete this file" });
    }

    try {
      fs.unlinkSync(file.path);
    } catch (err) {
      console.log("Error deleting file from disk", err);
    }

    await FileModel.deleteOne({ _id: id });

    res.json({ message: "File removed" });
  }
};

module.exports = fileController;

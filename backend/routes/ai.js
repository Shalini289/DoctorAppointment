const express = require("express");
const router = express.Router();

const {
  uploadReport,
  getReports
} = require("../controllers/reportController");

const { protect } = require("../middleware/authMiddleware");
const upload = require("../utils/upload");

router.post("/upload", protect, upload.single("file"), uploadReport);
router.get("/", protect, getReports);

module.exports = router;
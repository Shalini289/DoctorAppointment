const express = require("express");
const router = express.Router();

const { predictRisk } = require("../controllers/riskController");
const { protect } = require("../middleware/authMiddleware");

router.get("/", protect, predictRisk);

module.exports = router;
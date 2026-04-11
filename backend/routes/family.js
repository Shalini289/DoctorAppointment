const express = require("express");
const router = express.Router();

const {
  addFamilyMember,
  getFamily
} = require("../controllers/familyController");

const { protect } = require("../middleware/authMiddleware");

router.post("/", protect, addFamilyMember);
router.get("/", protect, getFamily);
router.put("/:id", protect, updateFamilyMember);
router.delete("/:id", protect, deleteFamilyMember);
module.exports = router;
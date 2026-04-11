const express = require("express");
const router = express.Router();

const {
  bookAppointment,
  getMyAppointments,
  getSlots,
  cancelAppointment
} = require("../controllers/appointmentController");

const { protect } = require("../middleware/authMiddleware");

router.post("/", protect, bookAppointment);
router.get("/my", protect, getMyAppointments);
router.get("/slots/:doctorId/:date", getSlots);
router.put("/cancel/:id", protect, cancelAppointment);

module.exports = router;
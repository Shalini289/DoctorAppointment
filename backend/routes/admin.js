const express = require("express");
const router = express.Router();

const {
  getDashboardStats,
  getUsers,
  deleteUser,
  getDoctorsAdmin,
  addDoctor,
  deleteDoctor,
  getAppointmentsAdmin,
  updateAppointmentStatus,
  addMedicine,
  getMedicinesAdmin,
  updateMedicine,
  deleteMedicine,
  getOrdersAdmin,
  updateOrderStatus,
  getReportsAdmin,
  addHospital,
  getHospitalsAdmin,
  updateHospitalBeds,
  getMonthlyRevenue
} = require("../controllers/adminController");

const { protect, admin } = require("../middleware/authMiddleware");

router.get("/stats", protect, admin, getDashboardStats);

router.get("/users", protect, admin, getUsers);
router.delete("/users/:id", protect, admin, deleteUser);

router.get("/doctors", protect, admin, getDoctorsAdmin);
router.post("/doctors", protect, admin, addDoctor);
router.delete("/doctors/:id", protect, admin, deleteDoctor);

router.get("/appointments", protect, admin, getAppointmentsAdmin);
router.put("/appointments/:id", protect, admin, updateAppointmentStatus);

router.post("/medicine", protect, admin, addMedicine);
router.get("/medicine", protect, admin, getMedicinesAdmin);
router.put("/medicine/:id", protect, admin, updateMedicine);
router.delete("/medicine/:id", protect, admin, deleteMedicine);

router.get("/orders", protect, admin, getOrdersAdmin);
router.put("/orders/:id", protect, admin, updateOrderStatus);

router.get("/reports", protect, admin, getReportsAdmin);

router.post("/hospital", protect, admin, addHospital);
router.get("/hospital", protect, admin, getHospitalsAdmin);
router.put("/hospital/:id", protect, admin, updateHospitalBeds);

router.get("/revenue", protect, admin, getMonthlyRevenue);

module.exports = router;
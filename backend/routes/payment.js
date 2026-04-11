const express = require("express");
const router = express.Router();

const {
  getMedicines,
  placeOrder,
  getOrders
} = require("../controllers/pharmacyController");

const { protect } = require("../middleware/authMiddleware");

router.get("/", getMedicines);
router.post("/order", protect, placeOrder);
router.get("/my-orders", protect, getOrders);

module.exports = router;
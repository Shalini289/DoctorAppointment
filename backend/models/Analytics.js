const mongoose = require("mongoose");

const analyticsSchema = new mongoose.Schema({
  totalUsers: Number,
  totalDoctors: Number,
  totalAppointments: Number
});

module.exports = mongoose.model("Analytics", analyticsSchema);
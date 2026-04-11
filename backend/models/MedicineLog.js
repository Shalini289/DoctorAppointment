const mongoose = require("mongoose");

const logSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  medicine: String,
  taken: Boolean,
  date: String
});

module.exports = mongoose.model("MedicineLog", logSchema);
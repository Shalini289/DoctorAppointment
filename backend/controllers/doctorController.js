const Doctor = require("../models/Doctor");

const getDoctors = async (req, res) => {
  const doctors = await Doctor.find();
  res.json(doctors);
};

const getDoctorById = async (req, res) => {
  const doctor = await Doctor.findById(req.params.id);
  res.json(doctor);
};

const addDoctor = async (req, res) => {
  const doctor = await Doctor.create(req.body);
  res.json(doctor);
};

const deleteDoctor = async (req, res) => {
  await Doctor.findByIdAndDelete(req.params.id);
  res.json({ msg: "Deleted" });
};

module.exports = {
  getDoctors,
  getDoctorById,
  addDoctor,
  deleteDoctor
};
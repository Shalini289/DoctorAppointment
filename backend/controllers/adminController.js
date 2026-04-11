const User = require("../models/User");
const Doctor = require("../models/Doctor");
const Appointment = require("../models/Appointment");
const Medicine = require("../models/Medicine");
const Order = require("../models/Order");
const Report = require("../models/Report");
const Hospital = require("../models/Hospital");

//
// 📊 DASHBOARD STATS
//
const getDashboardStats = async (req, res) => {
  try {
    const totalUsers = await User.countDocuments();
    const totalDoctors = await Doctor.countDocuments();
    const totalAppointments = await Appointment.countDocuments();
    const totalOrders = await Order.countDocuments();

    const revenueData = await Order.aggregate([
      { $group: { _id: null, total: { $sum: "$total" } } }
    ]);

    res.json({
      totalUsers,
      totalDoctors,
      totalAppointments,
      totalOrders,
      revenue: revenueData[0]?.total || 0
    });
  } catch (err) {
    res.status(500).json({ msg: "Dashboard error" });
  }
};

//
// 👤 USER MANAGEMENT
//
const getUsers = async (req, res) => {
  const users = await User.find().select("-password");
  res.json(users);
};

const deleteUser = async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ msg: "User deleted" });
};

//
// 🧑‍⚕️ DOCTOR MANAGEMENT
//
const getDoctorsAdmin = async (req, res) => {
  const doctors = await Doctor.find();
  res.json(doctors);
};

const addDoctor = async (req, res) => {
  const doctor = await Doctor.create(req.body);
  res.json(doctor);
};

const deleteDoctor = async (req, res) => {
  await Doctor.findByIdAndDelete(req.params.id);
  res.json({ msg: "Doctor removed" });
};

//
// 📅 APPOINTMENT MANAGEMENT
//
const getAppointmentsAdmin = async (req, res) => {
  const appts = await Appointment.find()
    .populate("user", "name")
    .populate("doctor", "name");

  res.json(appts);
};

const updateAppointmentStatus = async (req, res) => {
  const appt = await Appointment.findById(req.params.id);

  appt.status = req.body.status;
  await appt.save();

  res.json(appt);
};

//
// 💊 MEDICINE MANAGEMENT
//
const addMedicine = async (req, res) => {
  const med = await Medicine.create(req.body);
  res.json(med);
};

const getMedicinesAdmin = async (req, res) => {
  const meds = await Medicine.find();
  res.json(meds);
};

const updateMedicine = async (req, res) => {
  const med = await Medicine.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.json(med);
};

const deleteMedicine = async (req, res) => {
  await Medicine.findByIdAndDelete(req.params.id);
  res.json({ msg: "Medicine deleted" });
};

//
// 📦 ORDER MANAGEMENT
//
const getOrdersAdmin = async (req, res) => {
  const orders = await Order.find()
    .populate("user", "name")
    .populate("items.medicine");

  res.json(orders);
};

const updateOrderStatus = async (req, res) => {
  const order = await Order.findById(req.params.id);

  order.status = req.body.status;
  await order.save();

  res.json(order);
};

//
// 🧾 REPORT MANAGEMENT
//
const getReportsAdmin = async (req, res) => {
  const reports = await Report.find().populate("user", "name");
  res.json(reports);
};

//
// 🏥 HOSPITAL MANAGEMENT
//
const addHospital = async (req, res) => {
  const hospital = await Hospital.create(req.body);
  res.json(hospital);
};

const getHospitalsAdmin = async (req, res) => {
  const hospitals = await Hospital.find();
  res.json(hospitals);
};

const updateHospitalBeds = async (req, res) => {
  const hospital = await Hospital.findByIdAndUpdate(
    req.params.id,
    { beds: req.body.beds },
    { new: true }
  );

  res.json(hospital);
};

//
// 📊 ANALYTICS (ADVANCED)
//
const getMonthlyRevenue = async (req, res) => {
  const data = await Order.aggregate([
    {
      $group: {
        _id: { $month: "$createdAt" },
        revenue: { $sum: "$total" }
      }
    },
    { $sort: { "_id": 1 } }
  ]);

  res.json(data);
};

module.exports = {
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
};
const Appointment = require("../models/Appointment");

const bookAppointment = async (req, res) => {
  try {
    const appointment = await Appointment.create({
      ...req.body,
      user: req.user.id
    });

    req.app.get("io").emit("slotBooked", appointment);

    res.json(appointment);
  } catch {
    res.status(400).json({ msg: "Slot already booked" });
  }
};

const getMyAppointments = async (req, res) => {
  const data = await Appointment.find({ user: req.user.id })
    .populate("doctor");

  res.json(data);
};

const getSlots = async (req, res) => {
  const { doctorId, date } = req.params;

  const booked = await Appointment.find({ doctor: doctorId, date });

  res.json(booked.map(b => b.time));
};

const cancelAppointment = async (req, res) => {
  const appt = await Appointment.findById(req.params.id);
  appt.status = "cancelled";
  await appt.save();

  res.json({ msg: "Cancelled" });
};

module.exports = {
  bookAppointment,
  getMyAppointments,
  getSlots,
  cancelAppointment
};
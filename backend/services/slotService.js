const Appointment = require("../models/Appointment");

const getBookedSlots = async (doctor, date) => {
  const booked = await Appointment.find({ doctor, date });
  return booked.map(b => b.time);
};

module.exports = { getBookedSlots };
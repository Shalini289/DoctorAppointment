const cron = require("node-cron");
const Appointment = require("../models/Appointment");
const sendEmail = require("../utils/sendEmail");

const startReminderJob = () => {
  cron.schedule("0 * * * *", async () => {
    console.log("⏰ Running Reminder Job");

    const today = new Date().toISOString().split("T")[0];

    const appts = await Appointment.find({
      date: today,
      status: "booked"
    }).populate("user");

    for (let a of appts) {
      await sendEmail(
        a.user.email,
        "Appointment Reminder",
        `You have an appointment today at ${a.time}`
      );
    }
  });
};

module.exports = startReminderJob;
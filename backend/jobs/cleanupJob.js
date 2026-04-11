const cron = require("node-cron");
const Appointment = require("../models/Appointment");

const startCleanupJob = () => {
  cron.schedule("0 0 * * *", async () => {
    console.log("🧹 Cleanup Job Running");

    await Appointment.deleteMany({
      status: "cancelled"
    });
  });
};

module.exports = startCleanupJob;
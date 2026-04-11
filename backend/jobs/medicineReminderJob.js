const cron = require("node-cron");
const MedicineLog = require("../models/MedicineLog");
const sendSMS = require("../utils/sendSMS");

const startMedicineReminder = () => {
  cron.schedule("0 9 * * *", async () => {
    console.log("💊 Medicine Reminder Job");

    const today = new Date().toISOString().split("T")[0];

    const logs = await MedicineLog.find({ date: today }).populate("user");

    for (let log of logs) {
      if (!log.taken && log.user.phone) {
        await sendSMS(
          log.user.phone,
          `Reminder: Take your ${log.medicine}`
        );
      }
    }
  });
};

module.exports = startMedicineReminder;
const sendEmail = require("../utils/sendEmail");
const sendSMS = require("../utils/sendSMS");

const notifyUser = async (user, message) => {
  if (user.email) {
    await sendEmail(user.email, "Notification", message);
  }

  if (user.phone) {
    await sendSMS(user.phone, message);
  }
};

module.exports = { notifyUser };
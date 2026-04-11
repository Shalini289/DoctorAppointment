const razorpay = require("../config/razorpay");

const createPaymentOrder = async (amount) => {
  return razorpay.orders.create({
    amount: amount * 100,
    currency: "INR"
  });
};

module.exports = { createPaymentOrder };
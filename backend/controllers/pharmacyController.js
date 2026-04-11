const Medicine = require("../models/Medicine");
const Order = require("../models/Order");

const getMedicines = async (req, res) => {
  res.json(await Medicine.find());
};

const placeOrder = async (req, res) => {
  const { items } = req.body;

  let total = 0;

  for (let item of items) {
    const med = await Medicine.findById(item.medicine);
    total += med.price * item.quantity;

    med.stock -= item.quantity;
    await med.save();
  }

  const order = await Order.create({
    user: req.user.id,
    items,
    total
  });

  res.json(order);
};

const getOrders = async (req, res) => {
  const orders = await Order.find({ user: req.user.id })
    .populate("items.medicine");

  res.json(orders);
};

module.exports = { getMedicines, placeOrder, getOrders };
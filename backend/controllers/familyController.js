const User = require("../models/User");

const addFamilyMember = async (req, res) => {
  const user = await User.findById(req.user.id);

  user.familyMembers.push(req.body);
  await user.save();

  res.json(user.familyMembers);
};

const getFamily = async (req, res) => {
  const user = await User.findById(req.user.id);
  res.json(user.familyMembers);
};

module.exports = { addFamilyMember, getFamily };
const User = require("../models/User");

/* ADD FAMILY MEMBER */
const addFamily = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);

    user.familyMembers.push(req.body);

    await user.save();

    res.json(user.familyMembers);

  } catch (err) {
    res.status(500).json({
      msg: err.message
    });
  }
};

/* GET FAMILY MEMBERS */
const getFamily = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);

    res.json(user.familyMembers);

  } catch (err) {
    res.status(500).json({
      msg: err.message
    });
  }
};

/* DELETE FAMILY MEMBER */
const deleteFamily = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);

    user.familyMembers = user.familyMembers.filter(
      member => member._id.toString() !== req.params.id
    );

    await user.save();

    res.json({
      msg: "Member deleted successfully"
    });

  } catch (err) {
    res.status(500).json({
      msg: err.message
    });
  }
};

/* UPDATE FAMILY MEMBER */
const updateFamily = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);

    const member = user.familyMembers.id(req.params.id);

    if (!member) {
      return res.status(404).json({
        msg: "Member not found"
      });
    }

    member.name = req.body.name;
    member.age = req.body.age;
    member.relation = req.body.relation;

    await user.save();

    res.json(member);

  } catch (err) {
    res.status(500).json({
      msg: err.message
    });
  }
};

module.exports = {
  addFamily,
  getFamily,
  deleteFamily,
  updateFamily
};
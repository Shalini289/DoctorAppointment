const Hospital = require("../models/Hospital");

const getHospitals = async (req, res) => {
  res.json(await Hospital.find());
};

const updateBeds = async (req, res) => {
  const hospital = await Hospital.findByIdAndUpdate(
    req.body.id,
    { beds: req.body.beds },
    { new: true }
  );

  req.app.get("io").emit("bedUpdate", hospital);

  res.json(hospital);
};

module.exports = { getHospitals, updateBeds };
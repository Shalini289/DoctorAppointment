const Report = require("../models/Report");

const predictRisk = async (req, res) => {
  const reports = await Report.find({ user: req.user.id });

  let risks = [];

  reports.forEach(r => {
    if (JSON.stringify(r.analysis).includes("diabetes")) {
      risks.push("Diabetes Risk");
    }
  });

  res.json({
    risks: [...new Set(risks)],
    advice: "Regular checkups recommended"
  });
};

module.exports = { predictRisk };
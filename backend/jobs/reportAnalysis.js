const cron = require("node-cron");
const Report = require("../models/Report");
const analyzeWithAI = require("../utils/aiAnalyzer");

const startReportAnalysisJob = () => {
  cron.schedule("*/30 * * * *", async () => {
    console.log("🧠 AI Batch Analysis Job");

    const reports = await Report.find({ analysis: null });

    for (let r of reports) {
      r.analysis = await analyzeWithAI(r.extractedText);
      await r.save();
    }
  });
};

module.exports = startReportAnalysisJob;
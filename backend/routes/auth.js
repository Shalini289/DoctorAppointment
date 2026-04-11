const extractText = require("../utils/extractText");
const { analyzeText } = require("./aiService");

const processReport = async (filePath) => {
  const text = await extractText(filePath);
  const analysis = await analyzeText(text);

  return { text, analysis };
};

module.exports = { processReport };
const fs = require("fs");
const pdfParse = require("pdf-parse");
const Tesseract = require("tesseract.js");

const extractText = async (filePath) => {
  if (filePath.endsWith(".pdf")) {
    const data = await pdfParse(fs.readFileSync(filePath));
    return data.text;
  } else {
    const result = await Tesseract.recognize(filePath, "eng");
    return result.data.text;
  }
};

module.exports = extractText;
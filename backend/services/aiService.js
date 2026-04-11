const groq = require("../config/groq");

const analyzeText = async (text) => {
  const res = await groq.chat.completions.create({
    model: "llama3-8b-8192",
    messages: [{ role: "user", content: text }]
  });

  return res.choices[0].message.content;
};

module.exports = { analyzeText };
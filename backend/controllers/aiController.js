const groq = require("../config/groq");

const symptomCheck = async (req, res) => {
  const { symptoms } = req.body;

  const ai = await groq.chat.completions.create({
    model: "llama3-8b-8192",
    messages: [{ role: "user", content: symptoms }]
  });

  res.json({ result: ai.choices[0].message.content });
};

module.exports = { symptomCheck };
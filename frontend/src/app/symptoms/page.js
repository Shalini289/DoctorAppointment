"use client";

import { useState } from "react";
import { api } from "../../utils/api";
import { getToken } from "../../utils/auth";
import "../globals.css";
export default function SymptomPage() {
  const token = getToken();

  const [input, setInput] = useState("");
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(false);

  const checkSymptoms = async () => {
    if (!input.trim()) return alert("Enter symptoms");

    try {
      setLoading(true);

      const res = await api("/api/ai/symptoms", "POST", { text: input }, token);

      setResult(res?.conditions || []);
    } catch {
      alert("Failed to analyze symptoms");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="symptom-page">

      <h1>AI Symptom Checker</h1>
      <p>Describe your symptoms and get possible health insights</p>

      {/* INPUT */}
      <textarea
        placeholder="e.g. fever, headache, cough..."
        value={input}
        onChange={(e)=>setInput(e.target.value)}
      />

      <button className="btn-primary" onClick={checkSymptoms}>
        {loading ? "Analyzing..." : "Check Symptoms"}
      </button>

      {/* RESULT */}
      <div className="symptom-results">
        {result.length === 0 && !loading && (
          <p>No results yet</p>
        )}

        {result.map((r, i) => (
          <div key={i} className="symptom-card">
            <p>{r}</p>
          </div>
        ))}
      </div>

    </div>
  );
}
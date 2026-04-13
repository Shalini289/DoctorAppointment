"use client";

import { useEffect, useState } from "react";
import { api } from "@/utils/api";
import { getToken } from "@/utils/auth";

export default function HealthPage() {
  const token = getToken();

  const [reports, setReports] = useState([]);
  const [risks, setRisks] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const r = await api("/api/report", "GET", null, token);
    const risk = await api("/api/risk", "GET", null, token);

    setReports(r || []);
    setRisks(risk?.risks || []);
  };

  return (
    <div className="health-page">

      <h1>Health Dashboard</h1>

      {/* RISKS */}
      <div className="card">
        <h3>Risk Prediction</h3>

        {risks.length === 0
          ? <p>No risks detected</p>
          : risks.map((r,i)=><span key={i} className="badge">{r}</span>)
        }
      </div>

      {/* REPORTS */}
      <div className="card">
        <h3>Reports</h3>

        {reports.map(rep => (
          <div key={rep._id} className="report">
            <p>{rep.file}</p>
            <small>{rep.analysis || "Processing..."}</small>
          </div>
        ))}
      </div>

    </div>
  );
}
"use client";

import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { api } from "../../utils/api";

export default function HospitalPage() {
  const [hospitals, setHospitals] = useState([]);
  const [loading, setLoading] = useState(true);

  // 📥 Initial Load
  useEffect(() => {
    loadHospitals();
  }, []);

  const loadHospitals = async () => {
    try {
      const data = await api("/api/hospital");
      setHospitals(Array.isArray(data) ? data : []);
    } finally {
      setLoading(false);
    }
  };

  // 📡 Real-time updates
  useEffect(() => {
    const socket = io("http://localhost:5000");

    socket.on("bedUpdate", (updated) => {
      setHospitals(prev =>
        prev.map(h =>
          h._id === updated._id ? updated : h
        )
      );
    });

    return () => socket.disconnect();
  }, []);

  if (loading) return <p className="center">Loading hospitals...</p>;

  return (
    <div className="hospital-page">

      {/* HEADER */}
      <div className="hospital-header">
        <h1>Hospital Availability</h1>
        <p>Check real-time bed availability in nearby hospitals</p>
      </div>

      {/* EMPTY */}
      {hospitals.length === 0 && (
        <p className="empty">No hospital data available</p>
      )}

      {/* GRID */}
      <div className="hospital-grid">
        {hospitals.map(h => (
          <div key={h._id} className="hospital-card">

            {/* INFO */}
            <div className="hospital-top">
              <h3>{h.name}</h3>
              <span className="city">📍 {h.city}</span>
            </div>

            {/* BEDS */}
            <div className="beds">

              <div className="bed icu">
                <span>ICU</span>
                <strong>{h.beds?.ICU || 0}</strong>
              </div>

              <div className="bed oxygen">
                <span>Oxygen</span>
                <strong>{h.beds?.oxygen || 0}</strong>
              </div>

              <div className="bed general">
                <span>General</span>
                <strong>{h.beds?.general || 0}</strong>
              </div>

            </div>

          </div>
        ))}
      </div>

    </div>
  );
}
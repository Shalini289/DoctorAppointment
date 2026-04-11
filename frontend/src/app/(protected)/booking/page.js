"use client";

import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { bookAppointment } from "../../services/appointmentService";

export default function Booking() {
  const doctor = useSearchParams().get("id");

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [family, setFamily] = useState([]);
  const [selected, setSelected] = useState("");
  const [loading, setLoading] = useState(false);

  // 📥 Fetch family members
  useEffect(() => {
    const token = localStorage.getItem("token");

    fetch("http://localhost:5000/api/family", {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(r => r.json())
      .then(res => setFamily(Array.isArray(res) ? res : []));
  }, []);

  // 📤 Booking
  const handle = async () => {
    if (!date || !time || !selected) {
      return alert("Please fill all fields");
    }

    try {
      setLoading(true);

      await bookAppointment({
        doctor,
        date,
        time,
        patient: selected
      });

      alert("Appointment booked 🎉");
    } catch {
      alert("Booking failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="booking-page">

      <div className="booking-card glass">

        <h2>Book Appointment</h2>
        <p className="sub">Choose date, time & patient</p>

        {/* DATE */}
        <div className="field">
          <label>Date</label>
          <input
            type="date"
            value={date}
            onChange={(e)=>setDate(e.target.value)}
          />
        </div>

        {/* TIME */}
        <div className="field">
          <label>Time</label>
          <input
            type="time"
            value={time}
            onChange={(e)=>setTime(e.target.value)}
          />
        </div>

        {/* FAMILY */}
        <div className="field">
          <label>Select Patient</label>
          <select
            value={selected}
            onChange={(e)=>setSelected(e.target.value)}
          >
            <option value="">Choose patient</option>

            {family.map(f => (
              <option key={f._id} value={f._id}>
                {f.name} ({f.relation})
              </option>
            ))}
          </select>
        </div>

        {/* BUTTON */}
        <button
          className="btn-primary"
          onClick={handle}
          disabled={loading}
        >
          {loading ? "Booking..." : "Confirm Booking"}
        </button>

      </div>

    </div>
  );
}
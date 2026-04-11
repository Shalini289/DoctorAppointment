"use client";

import { useEffect, useState } from "react";
import { getMyAppointments } from "../../services/appointmentService";
import AppointmentCard from "../../components/AppointmentCard";
import "../globals.css"
export default function Profile() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    getMyAppointments().then(res =>
      setAppointments(Array.isArray(res) ? res : [])
    );
  }, []);

  return (
    <div className="profile-page">

      <h1>My Appointments</h1>

      {appointments.length === 0 && <p>No appointments</p>}

      <div className="appointments-grid">
        {appointments.map(a => (
          <AppointmentCard key={a._id} item={a} />
        ))}
      </div>

    </div>
  );
}
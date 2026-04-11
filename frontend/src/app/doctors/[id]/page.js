"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { api } from "../../../utils/api";
import Loader from "../../../components/Loader";

export default function DoctorPage() {
  const { id } = useParams();
  const router = useRouter();

  const [doctor, setDoctor] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDoctor();
  }, []);

  const fetchDoctor = async () => {
    try {
      const data = await api(`/api/doctors/${id}`);
      setDoctor(data);
    } catch {
      setDoctor(null);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <Loader />;
  if (!doctor) return <p className="empty">Doctor not found</p>;

  return (
    <div className="doctor-page">

      {/* PROFILE */}
      <div className="doctor-profile glass">

        <img
          src={doctor.image || "/doc.png"}
          alt={doctor.name}
          className="doctor-img"
        />

        <div className="doctor-info">
          <h1>{doctor.name}</h1>
          <p className="spec">{doctor.specialization}</p>

          <div className="meta">
            <span>⭐ {doctor.rating || 4.5}</span>
            <span>{doctor.experience} yrs exp</span>
            <span>₹{doctor.fees}</span>
          </div>

          <button
            className="btn-primary"
            onClick={() => router.push(`/booking?id=${doctor._id}`)}
          >
            Book Appointment
          </button>
        </div>

      </div>

      {/* ABOUT */}
      <div className="doctor-section">
        <h3>About Doctor</h3>
        <p>{doctor.about || "Experienced specialist providing quality care."}</p>
      </div>

      {/* DETAILS */}
      <div className="doctor-section grid">
        <div className="detail-card">
          <h4>Experience</h4>
          <p>{doctor.experience} years</p>
        </div>

        <div className="detail-card">
          <h4>Consultation Fee</h4>
          <p>₹{doctor.fees}</p>
        </div>

        <div className="detail-card">
          <h4>Specialization</h4>
          <p>{doctor.specialization}</p>
        </div>
      </div>

    </div>
  );
}
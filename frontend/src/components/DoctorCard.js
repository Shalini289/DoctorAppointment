"use client";

import { useRouter } from "next/navigation";
import "../styles/card.css";
import"../styles/doctor.css";

export default function DoctorCard({ doctor }) {
  const router = useRouter();

  return (
    <div
      className="doctor-card"
      onClick={() => router.push(`/doctors/${doctor._id}`)}
    >

      {/* IMAGE */}
      <div className="doctor-img-wrap">
        <img
          src={doctor.image || "/doc.png"}
          alt={doctor.name}
        />
      </div>

      {/* INFO */}
      <div className="doctor-content">
        <h3>{doctor.name}</h3>
        <p className="spec">{doctor.specialization}</p>

        <div className="meta">
          <span>⭐ {doctor.rating || "4.5"}</span>
          <span>{doctor.experience || 5} yrs</span>
        </div>
      </div>

      {/* ACTION */}
      <button
        className="book-btn"
        onClick={(e) => {
          e.stopPropagation(); // prevent card click
          router.push(`/booking?id=${doctor._id}`);
        }}
      >
        Book Appointment
      </button>

    </div>
  );
}
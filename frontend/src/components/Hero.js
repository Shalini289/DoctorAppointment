"use client";

import { useRouter } from "next/navigation";
import "../styles/hero.css";
export default function Hero() {
  const router = useRouter();

  return (
    <section className="hero">

      <div className="hero-content">

        {/* TEXT */}
        <div className="hero-text">
          <h1>
            Healthcare <span>made simple</span>
          </h1>

          <p>
            Book appointments, order medicines, and manage your health —
            all in one place.
          </p>

          {/* ACTIONS */}
          <div className="hero-actions">
            <button
              className="btn-primary"
              onClick={() => router.push("/doctors")}
            >
              Book Appointment
            </button>

            <button
              className="btn-ghost"
              onClick={() => router.push("/symptoms")}
            >
              Check Symptoms
            </button>
          </div>

        </div>

        {/* IMAGE / VISUAL */}
        <div className="hero-image">
          <img src="/doctor-hero.png" alt="Doctor" />
        </div>

      </div>

    </section>
  );
}
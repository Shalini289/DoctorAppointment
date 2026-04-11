import Link from "next/link";
import "../styles/booking.css";
export default function BookingBanner() {
  return (
    <section className="booking-banner">
      <div className="booking-banner__inner">
        <div className="booking-banner__text">
          <div className="section-tag" style={{ marginBottom: "0.75rem" }}>Get started today</div>
          <h2 className="booking-banner__heading">Ready to feel better?</h2>
          <p className="booking-banner__sub">
            Search from 850+ doctors across 30 specialisations. Appointments available today.
          </p>
          <div className="booking-banner__actions">
            <Link href="/booking" className="btn-primary btn-large">Book an Appointment</Link>
            <Link href="/doctors" className="btn-ghost  btn-large">Browse Doctors</Link>
          </div>
        </div>
        <div className="booking-banner__art" aria-hidden="true">
          <div className="booking-banner__circle booking-banner__circle--1" />
          <div className="booking-banner__circle booking-banner__circle--2" />
          <div className="booking-banner__circle booking-banner__circle--3" />
          <div className="booking-banner__stat">
            <span className="booking-banner__stat-num">50k+</span>
            <span className="booking-banner__stat-label">Happy patients</span>
          </div>
        </div>
      </div>
    </section>
  );
}
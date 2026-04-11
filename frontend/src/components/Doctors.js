import Link from "next/link";
import"../styles/doctors.css";

export default function Doctors({ doctors = [] }) {
  return (
    <section className="section section--alt">

      <div className="section-header">
        <div className="section-tag">Our specialists</div>
        <h2>Meet top-rated doctors</h2>
        <p>Verified doctors with excellent patient feedback</p>
      </div>

      <div className="doctors-grid">
        {doctors.map((d) => (
          <Link key={d._id} href={`/doctors/${d._id}`} className="doctor-card">

            {/* AVATAR */}
            <div className="doctor-avatar">
              {d.name.charAt(0)}
            </div>

            {/* INFO */}
            <h3>{d.name}</h3>
            <p className="spec">{d.specialization}</p>
            <p className="hospital">{d.hospital}</p>

            {/* RATING */}
            <div className="rating">
              ⭐ {d.rating || 4.5} ({d.reviews || 120})
            </div>

            {/* AVAILABILITY */}
            <span className={`avail ${d.availableToday ? "today" : "tmw"}`}>
              {d.availableToday ? "Available Today" : "Available Tomorrow"}
            </span>

            {/* ACTION */}
            <button className="book-btn">
              Book Now
            </button>

          </Link>
        ))}
      </div>

      <div className="doctors-cta">
        <Link href="/doctors" className="btn-ghost btn-large">
          View all doctors →
        </Link>
      </div>

    </section>
  );
}
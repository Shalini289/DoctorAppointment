import Link from "next/link";
import "../styles/services.css";
const SERVICES = [
  { icon: "🩺", title: "General Consultation", desc: "Talk to a certified GP anytime.",           color: "rose",     href: "/doctors" },
  { icon: "🧠", title: "Mental Wellness",       desc: "Confidential therapy sessions.",           color: "mint",     href: "/doctors" },
  { icon: "🫀", title: "Cardiology",            desc: "Heart specialists & diagnostics.",         color: "sky",      href: "/doctors" },
  { icon: "👶", title: "Paediatrics",           desc: "Care for infants to teens.",               color: "peach",    href: "/doctors" },
  { icon: "🔬", title: "Lab Tests",             desc: "Fast reports with home collection.",       color: "lavender", href: "/reports" },
  { icon: "💊", title: "Pharmacy",              desc: "Order medicines online easily.",           color: "mint",     href: "/pharmacy" },
];

export default function Services() {
  return (
    <section className="section services">

      {/* HEADER */}
      <div className="section-header">
        <div className="section-tag">What we offer</div>
        <h2>Care for every health need</h2>
        <p>From routine checkups to specialist consultations</p>
      </div>

      {/* GRID */}
      <div className="services-grid">
        {SERVICES.map(({ icon, title, desc, color, href }) => (
          <Link key={title} href={href} className="service-card">

            {/* ICON */}
            <div className={`service-icon service-icon--${color}`}>
              {icon}
            </div>

            {/* TEXT */}
            <h3>{title}</h3>
            <p>{desc}</p>

            {/* CTA */}
            <span className="service-cta">
              Explore →
            </span>

          </Link>
        ))}
      </div>

    </section>
  );
}
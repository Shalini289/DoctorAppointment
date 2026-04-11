import"../styles/card.css";
export default function AppointmentCard({ item }) {
  return (
    <div className="appointment-card">

      {/* TOP */}
      <div className="appointment-top">
        <div>
          <h3 className="doctor-name">
            {item.doctor?.name || "Doctor"}
          </h3>
          <p className="appointment-time">
            📅 {item.date} • ⏰ {item.time}
          </p>
        </div>

        <span className={`status ${item.status}`}>
          {item.status}
        </span>
      </div>

      {/* BOTTOM */}
      <div className="appointment-footer">
        <button className="btn-ghost">View</button>
        <button className="btn-primary">Rebook</button>
      </div>

    </div>
  );
}
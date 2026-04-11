export default function Notifications({ messages = [], onClear }) {
  return (
    <div className="notif-container">

      {/* HEADER */}
      <div className="notif-header">
        <h3>Notifications</h3>

        {messages.length > 0 && (
          <button className="clear-btn" onClick={onClear}>
            Clear All
          </button>
        )}
      </div>

      {/* EMPTY */}
      {messages.length === 0 && (
        <p className="notif-empty">No notifications</p>
      )}

      {/* LIST */}
      <div className="notif-list">
        {messages.map((m, i) => (
          <div key={i} className="notif-item">
            <p>{typeof m === "string" ? m : m.text}</p>

            {m.time && <span>{m.time}</span>}
          </div>
        ))}
      </div>

    </div>
  );
}
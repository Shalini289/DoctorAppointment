export default function SlotPicker({ 
  slots = [], 
  selected, 
  setSelected,
  booked = [] 
}) {
  return (
    <div className="slot-picker">

      <h3>Select Time Slot</h3>

      <div className="slots-grid">
        {slots.map((s) => {
          const isBooked = booked.includes(s);
          const isSelected = selected === s;

          return (
            <button
              key={s}
              disabled={isBooked}
              className={`slot-btn 
                ${isSelected ? "active" : ""} 
                ${isBooked ? "booked" : ""}
              `}
              onClick={() => setSelected(s)}
            >
              {s}
            </button>
          );
        })}
      </div>

    </div>
  );
}
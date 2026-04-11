import "../styles/medicineCard.css";
export default function MedicineCard({ med, add }) {
  return (
    <div className="medicine-card">

      {/* IMAGE */}
      <div className="med-img">
        <img src={med.image || "/medicine.png"} alt={med.name} />
      </div>

      {/* INFO */}
      <div className="med-info">
        <h3>{med.name}</h3>

        <p className="med-desc">
          {med.description || "Effective medicine for your health"}
        </p>

        <div className="med-price">
          ₹{med.price}
        </div>
      </div>

      {/* ACTION */}
      <button
        className="add-btn"
        onClick={() => add(med)}
      >
        Add to Cart
      </button>

    </div>
  );
}
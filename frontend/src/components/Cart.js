import"../styles/cart.css";
export default function Cart({ cart, checkout }) {

  const total = cart.reduce(
    (sum, i) => sum + i.price * i.quantity,
    0
  );

  return (
    <div className="cart">

      {/* HEADER */}
      <h3 className="cart-title">Your Cart</h3>

      {/* EMPTY */}
      {cart.length === 0 && (
        <p className="cart-empty">Your cart is empty</p>
      )}

      {/* ITEMS */}
      <div className="cart-items">
        {cart.map(c => (
          <div key={c._id} className="cart-item">

            <div>
              <p className="cart-name">{c.name}</p>
              <span className="cart-qty">Qty: {c.quantity}</span>
            </div>

            <div className="cart-price">
              ₹{c.price * c.quantity}
            </div>

          </div>
        ))}
      </div>

      {/* TOTAL */}
      {cart.length > 0 && (
        <>
          <div className="cart-total">
            <span>Total</span>
            <strong>₹{total}</strong>
          </div>

          <button className="btn-primary cart-btn" onClick={checkout}>
            Proceed to Checkout
          </button>
        </>
      )}

    </div>
  );
}
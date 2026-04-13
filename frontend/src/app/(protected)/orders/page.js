"use client";

import { useEffect, useState } from "react";
import "@/styles/order.css";
export default function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");

    fetch("http://localhost:5000/api/pharmacy/my-orders", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(r => r.json())
      .then(res => setOrders(Array.isArray(res) ? res : []));
  }, []);

  return (
    <div className="orders-page">

      <h1>My Orders</h1>

      {orders.length === 0 && <p>No orders yet</p>}

      <div className="orders-list">
        {orders.map(o => (
          <div key={o._id} className="order-card">
            <p>Order ID: {o._id}</p>
            <p>Total: ₹{o.total}</p>

            <span className={`status ${o.status}`}>
              {o.status}
            </span>
          </div>
        ))}
      </div>

    </div>
  );
}
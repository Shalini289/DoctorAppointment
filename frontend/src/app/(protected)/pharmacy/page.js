"use client";

import { useEffect, useState } from "react";
import { getMedicines } from "@/services/pharmacyService";
import MedicineCard from "@/components/MedicineCard";
import Cart from "@/components/Cart";

export default function Pharmacy() {
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    getMedicines().then(res =>
      setData(Array.isArray(res) ? res : [])
    );
  }, []);

  const add = (med) => {
    setCart(prev => {
      const exists = prev.find(i => i._id === med._id);

      if (exists) {
        return prev.map(i =>
          i._id === med._id
            ? { ...i, quantity: i.quantity + 1 }
            : i
        );
      }

      return [...prev, { ...med, quantity: 1 }];
    });
  };

  return (
    <div className="pharmacy-page">

      <h1>Pharmacy</h1>

      <div className="pharmacy-layout">

        {/* PRODUCTS */}
        <div className="pharmacy-grid">
          {data.map(m => (
            <MedicineCard key={m._id} med={m} add={add} />
          ))}
        </div>

        {/* CART */}
        <Cart cart={cart} checkout={() => alert("Checkout")} />

      </div>

    </div>
  );
}
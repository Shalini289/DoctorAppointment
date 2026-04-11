"use client";

import "../styles/navbar.css";
import { useRouter } from "next/navigation";
import NotificationBell from "./NotificationBell";

export default function Navbar() {
  const router = useRouter();

  return (
    <nav className="navbar">

      {/* LOGO */}
      <div className="logo" onClick={() => router.push("/")}>
        MediCare
      </div>

      {/* LINKS */}
      <ul className="nav-links">
        <li onClick={() => router.push("/doctors")}>Doctors</li>
        <li onClick={() => router.push("/pharmacy")}>Pharmacy</li>
        <li onClick={() => router.push("/orders")}>Orders</li>
        <li onClick={() => router.push("/profile")}>Appointments</li>
        <li onClick={() => router.push("/chat")}>Chat</li>
      </ul>

      {/* RIGHT SIDE */}
      <div className="nav-right">

        <NotificationBell />

        <button
          className="btn-ghost"
          onClick={() => router.push("/notifications")}
        >
          🔔
        </button>

        <button
          className="btn-primary"
          onClick={() => router.push("/login")}
        >
          Login
        </button>

      </div>

    </nav>
  );
}
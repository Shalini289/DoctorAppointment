"use client";

import { useEffect, useState } from "react";
import { io } from "socket.io-client";

export default function NotificationBell() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const socket = io("http://localhost:5000");

    socket.on("slotBooked", (data) => {
      setNotifications(prev => [
        ...prev,
        `New appointment booked`
      ]);
    });

    socket.on("bedUpdate", () => {
      setNotifications(prev => [
        ...prev,
        "Hospital bed updated"
      ]);
    });

    return () => socket.disconnect();
  }, []);

  return (
    <div className="bell">
      🔔 {notifications.length}

      <div className="dropdown">
        {notifications.map((n, i) => (
          <p key={i}>{n}</p>
        ))}
      </div>
    </div>
  );
}
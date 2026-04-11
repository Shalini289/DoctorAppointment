"use client";
import "@/styles/notification.css"
import { useEffect, useState } from "react";
import { io } from "socket.io-client";

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState([]);

  // 📡 Socket connection
  useEffect(() => {
    const socket = io("http://localhost:5000");

    socket.on("newAppointment", (data) => {
      addNotification(`📅 New appointment booked for ${data.patient}`);
    });

    socket.on("bedUpdate", () => {
      addNotification("🏥 Hospital bed availability updated");
    });

    socket.on("receiveMessage", () => {
      addNotification("💬 New message received");
    });

    return () => socket.disconnect();
  }, []);

  // ➕ Add notification
  const addNotification = (text) => {
    const newNotif = {
      id: Date.now(),
      text,
      read: false,
      time: new Date().toLocaleTimeString(),
    };

    setNotifications((prev) => [newNotif, ...prev]);
  };

  // ✔ Mark as read
  const markRead = (id) => {
    setNotifications((prev) =>
      prev.map((n) =>
        n.id === id ? { ...n, read: true } : n
      )
    );
  };

  // 🗑 Clear all
  const clearAll = () => {
    setNotifications([]);
  };

  return (
    <div className="notif-page">

      {/* HEADER */}
      <div className="notif-header">
        <h1>Notifications</h1>
        <button onClick={clearAll} className="clear-btn">
          Clear All
        </button>
      </div>

      {/* EMPTY */}
      {notifications.length === 0 && (
        <p className="notif-empty">No notifications yet</p>
      )}

      {/* LIST */}
      <div className="notif-list">
        {notifications.map((n) => (
          <div
            key={n.id}
            className={`notif-card ${n.read ? "read" : ""}`}
            onClick={() => markRead(n.id)}
          >
            <p>{n.text}</p>
            <span>{n.time}</span>
          </div>
        ))}
      </div>

    </div>
  );
}
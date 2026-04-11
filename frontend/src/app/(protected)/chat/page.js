"use client";

import { useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";
import"@/styles/chat.css";


export default function ChatPage() {
  const [socket, setSocket] = useState(null);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const bottomRef = useRef();

  // 🔌 Connect socket
  useEffect(() => {
    const s = io("http://localhost:5000");
    setSocket(s);

    s.on("receiveMessage", (msg) => {
      setMessages(prev => [
        ...prev,
        { text: msg.message || msg, type: "received" }
      ]);
    });

    return () => s.disconnect();
  }, []);

  // 📜 Auto scroll
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // 📤 Send message
  const sendMessage = () => {
    if (!message.trim() || !socket) return;

    socket.emit("sendMessage", message);

    setMessages(prev => [
      ...prev,
      { text: message, type: "sent" }
    ]);

    setMessage("");
  };

  return (
    <div className="chat-page">

      {/* HEADER */}
      <div className="chat-header">
        <h3>Doctor Chat</h3>
        <span className="chat-status">Online</span>
      </div>

      {/* MESSAGES */}
      <div className="chat-box">
        {messages.map((m, i) => (
          <div
            key={i}
            className={`chat-msg ${m.type === "sent" ? "sent" : "received"}`}
          >
            {m.text}
          </div>
        ))}
        <div ref={bottomRef}></div>
      </div>

      {/* INPUT */}
      <div className="chat-input">
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message..."
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />

        <button onClick={sendMessage}>Send</button>
      </div>

    </div>
  );
}
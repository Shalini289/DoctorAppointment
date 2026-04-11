"use client";

import { useState } from "react";
import { login } from "../../services/authService";
import { validateEmail } from "../../utils/validators";
import "../globals.css";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });

  const handle = async () => {
    if (!validateEmail(form.email)) {
      return alert("Invalid email");
    }

    try {
      await login(form);
      window.location.href = "/";
    } catch {
      alert("Login failed");
    }
  };

  return (
    <div className="center">
      <h2>Login</h2>

      <input placeholder="Email"
        onChange={(e)=>setForm({...form,email:e.target.value})}/>

      <input type="password" placeholder="Password"
        onChange={(e)=>setForm({...form,password:e.target.value})}/>

      <button onClick={handle}>Login</button>
    </div>
  );
}
"use client";

import { useState } from "react";
import { register } from "../../services/authService";
import { useRouter } from "next/navigation";

export default function Signup() {
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handle = async () => {
    if (!form.name || !form.email || !form.password) {
      return alert("Fill all fields");
    }

    try {
      setLoading(true);
      await register(form);

      alert("Registered successfully 🎉");
      router.push("/login");
    } catch {
      alert("Signup failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">

      <div className="auth-card glass">

        <h2>Create Account</h2>

        <input
          placeholder="Full Name"
          value={form.name}
          onChange={(e)=>setForm({...form,name:e.target.value})}
        />

        <input
          placeholder="Email"
          value={form.email}
          onChange={(e)=>setForm({...form,email:e.target.value})}
        />

        <input
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e)=>setForm({...form,password:e.target.value})}
        />

        <button className="btn-primary" onClick={handle}>
          {loading ? "Creating..." : "Sign Up"}
        </button>

        <p className="auth-switch">
          Already have an account? <span onClick={()=>router.push("/login")}>Login</span>
        </p>

      </div>

    </div>
  );
}
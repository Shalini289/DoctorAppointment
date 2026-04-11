"use client";

import { useEffect, useState } from "react";
import { api } from "../../utils/api";
import { getToken } from "../../utils/auth";

export default function FamilyPage() {
  const token = getToken();

  const [members, setMembers] = useState([]);
  const [form, setForm] = useState({ name: "", age: "", relation: "" });
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    loadMembers();
  }, []);

  const loadMembers = async () => {
    const data = await api("/api/family", "GET", null, token);
    setMembers(Array.isArray(data) ? data : []);
  };

  const submit = async () => {
    if (!form.name || !form.age || !form.relation) {
      return alert("Fill all fields");
    }

    if (editingId) {
      await api(`/api/family/${editingId}`, "PUT", form, token);
    } else {
      await api("/api/family", "POST", form, token);
    }

    setForm({ name: "", age: "", relation: "" });
    setEditingId(null);
    loadMembers();
  };

  const edit = (m) => {
    setForm(m);
    setEditingId(m._id);
  };

  const remove = async (id) => {
    await api(`/api/family/${id}`, "DELETE", null, token);
    loadMembers();
  };

  return (
    <div className="family-page">

      <h1>Family Members</h1>

      {/* FORM */}
      <div className="family-form">
        <input placeholder="Name" value={form.name}
          onChange={(e)=>setForm({...form,name:e.target.value})} />

        <input type="number" placeholder="Age" value={form.age}
          onChange={(e)=>setForm({...form,age:e.target.value})} />

        <input placeholder="Relation" value={form.relation}
          onChange={(e)=>setForm({...form,relation:e.target.value})} />

        <button onClick={submit}>
          {editingId ? "Update" : "Add"}
        </button>
      </div>

      {/* LIST */}
      <div className="family-grid">
        {members.map(m => (
          <div key={m._id} className="family-card">

            <div className="avatar">{m.name[0]}</div>

            <h3>{m.name}</h3>
            <p>{m.relation}</p>
            <span>{m.age} yrs</span>

            <div className="actions">
              <button onClick={()=>edit(m)}>Edit</button>
              <button className="danger" onClick={()=>remove(m._id)}>
                Delete
              </button>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}
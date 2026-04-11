"use client";

import { useState } from "react";
import "../globals.css";
export default function Reports() {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const upload = async () => {
    if (!file) return alert("Select file");

    const form = new FormData();
    form.append("file", file);

    try {
      setLoading(true);

      await fetch("http://localhost:5000/api/report/upload", {
        method: "POST",
        body: form,
      });

      alert("Uploaded successfully");
    } catch {
      alert("Upload failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="reports-page">

      <h1>Upload Medical Reports</h1>

      <div className="report-box">
        <input type="file" onChange={(e)=>setFile(e.target.files[0])} />

        <button className="btn-primary" onClick={upload}>
          {loading ? "Uploading..." : "Upload"}
        </button>
      </div>

    </div>
  );
}
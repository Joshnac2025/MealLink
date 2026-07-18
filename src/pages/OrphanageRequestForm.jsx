// src/pages/OrphanageRequestForm.jsx
import React, { useState } from "react";
import api from "../services/api";

export default function OrphanageRequestForm({ onRequested }) {
  const [foodType, setFoodType] = useState("");
  const [quantity, setQuantity] = useState("");
  const [notes, setNotes] = useState("");
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");

  async function submit(e) {
    e.preventDefault();
    setErr("");
    if (!foodType || !quantity) {
      setErr("Please fill required fields.");
      return;
    }
    setLoading(true);
    try {
      const payload = { food_type: foodType, quantity, notes };
      const res = await api.post("/orphanage/request", payload);
      if (onRequested) onRequested(res.data);
      setFoodType(""); setQuantity(""); setNotes("");
      alert("Request submitted");
    } catch (e) {
      console.error(e);
      setErr("Failed to submit request.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={submit} aria-label="orphanage request form">
      <label>Food type
        <input value={foodType} onChange={e => setFoodType(e.target.value)} required/>
      </label>

      <label>Quantity
        <input value={quantity} onChange={e => setQuantity(e.target.value)} required />
      </label>

      <label>Notes (optional)
        <textarea value={notes} onChange={e => setNotes(e.target.value)} />
      </label>

      <button type="submit" disabled={loading}>{loading ? "Requesting…" : "Request Donation"}</button>
      {err && <div className="error" role="alert">{err}</div>}
    </form>
  );
}
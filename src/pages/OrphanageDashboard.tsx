// src/pages/OrphanageDashboard.jsx
import React, { useEffect, useState } from "react";
import api from "../services/api";
import OrphanageRequestForm from "./OrphanageRequestForm";

export default function OrphanageDashboard() {
  const [requests, setRequests] = useState([]);

  useEffect(() => { load(); }, []);

  async function load() {
    try {
      const res = await api.get("/orphanage/requests");
      setRequests(res.data || []);
    } catch (e) {
      console.error(e); setRequests([]);
    }
  }

  function onRequested(newReq) {
    // refresh requests (or push)
    load();
  }

  return (
    <div className="container p-6">
      <h2>Orphanage Dashboard</h2>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 420px", gap: 20 }}>
        <div>
          <h3>Requests</h3>
          {requests.length === 0 && <p>No requests yet</p>}
          <ul>
            {requests.map(r => (
              <li key={r.id} className="card">
                <strong>{r.food_type}</strong> — {r.quantity}
                <div>Status: {r.status}</div>
              </li>
            ))}
          </ul>
        </div>

        <aside>
          <h3>Make a Request</h3>
          <OrphanageRequestForm onRequested={onRequested} />
        </aside>
      </div>
    </div>
  );
}
// src/pages/AdminControls.jsx
import React, { useEffect, useState } from "react";
import api from "../services/api";

export default function AdminControls() {
  const [users, setUsers] = useState([]);
  const [donations, setDonations] = useState([]);

  useEffect(() => { loadAll(); }, []);

  async function loadAll() {
    try {
      const u = await api.get("/admin/users");
      const d = await api.get("/admin/donations");
      setUsers(u.data || []); setDonations(d.data || []);
    } catch (e) {
      console.error(e);
    }
  }

  async function approveUser(id) {
    try {
      await api.put(`/admin/users/${id}/approve`);
      loadAll();
    } catch (err) {
      console.error(err);
      alert("Approve failed");
    }
  }

  async function updateDonation(id, action) {
    try {
      await api.put(`/admin/donations/${id}/${action}`);
      loadAll();
    } catch (err) { console.error(err); alert("Update failed"); }
  }

  return (
    <div className="container p-6">
      <h2>Admin Panel</h2>

      <section>
        <h3>Users</h3>
        <ul>
          {users.map(u => (
            <li key={u.id} className="card">
              {u.name} — {u.email} — {u.role}
              <button onClick={() => approveUser(u.id)}>Approve</button>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h3>Donations</h3>
        <ul>
          {donations.map(d => (
            <li key={d.id} className="card">
              {d.donation_type} — {d.quantity} — {d.status}
              <button onClick={() => updateDonation(d.id, "approve")}>Approve</button>
              <button onClick={() => updateDonation(d.id, "reject")}>Reject</button>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
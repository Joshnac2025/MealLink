import React, { useEffect, useState } from "react";
import api from "../services/api";

export default function AdminDashboard() {
  const [users, setUsers] = useState([]);
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    loadUsers();
    loadDonations();
  }, []);

  async function loadUsers() {
    try {
      const res = await api.get("/admin/users");
      setUsers(res.data || []);
    } catch (e) {
      console.error(e);
    }
  }

  async function loadDonations() {
    try {
      const res = await api.get("/admin/donations");
      setDonations(res.data || []);
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-4">Admin Dashboard</h2>

      <h3 className="text-xl font-semibold mt-4">Users</h3>
      <ul className="mt-2">
        {users.map((u) => (
          <li key={u.id} className="border p-2 mb-2">
            {u.name} — {u.role}
          </li>
        ))}
      </ul>

      <h3 className="text-xl font-semibold mt-6">All Donations</h3>
      <ul className="mt-2">
        {donations.map((d) => (
          <li key={d.id} className="border p-2 mb-2">
            {d.food_type} — {d.quantity} — {d.status}
          </li>
        ))}
      </ul>
    </div>
  );
}
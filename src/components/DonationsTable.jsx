// src/components/DonationsTable.jsx
import React from "react";

export default function DonationsTable({ donations = [] }) {
  if (!donations || donations.length === 0) {
    return <p>No donations yet (placeholder)</p>;
  }

  return (
    <table role="table" style={{ width: "100%", borderCollapse: "collapse" }}>
      <thead>
        <tr>
          <th style={{ textAlign: "left", padding: 8 }}>ID</th>
          <th style={{ textAlign: "left", padding: 8 }}>Food Type</th>
          <th style={{ textAlign: "left", padding: 8 }}>Quantity</th>
          <th style={{ textAlign: "left", padding: 8 }}>Status</th>
          <th style={{ textAlign: "left", padding: 8 }}>Date</th>
        </tr>
      </thead>
      <tbody>
        {donations.map((d) => (
          <tr key={d.id || `${d.food_type}-${d.quantity}`}>
            <td style={{ padding: 8 }}>{d.id ?? "—"}</td>
            <td style={{ padding: 8 }}>{d.food_type}</td>
            <td style={{ padding: 8 }}>{d.quantity}</td>
            <td style={{ padding: 8 }}>{d.status ?? "pending"}</td>
            <td style={{ padding: 8 }}>{d.date ?? d.created_at ?? "—"}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
// src/pages/Signup.jsx
import React, { useState } from "react";
import api from "../services/api";
import { saveAuth } from "../services/auth";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [role, setRole] = useState("donor");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  async function submit(e) {
    e.preventDefault();
    setError("");
    try {
      const res = await api.post("/auth/signup", { name, phone, email, password, role });
      const { token, user } = res.data;
      saveAuth(token, user);
      if (user.role === "donor") navigate("/donor");
      else if (user.role === "orphanage") navigate("/orphanage");
      else navigate("/");
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.error || "Signup failed");
    }
  }

  return (
    <main className="container">
      <h2>Signup</h2>
      <form onSubmit={submit} aria-label="signup form">
        <label>Role
          <select value={role} onChange={e => setRole(e.target.value)}>
            <option value="donor">Donor</option>
            <option value="orphanage">Orphanage</option>
            <option value="admin">Admin</option>
          </select>
        </label>

        <label>Name
          <input value={name} onChange={e => setName(e.target.value)} required />
        </label>

        <label>Phone
          <input value={phone} onChange={e => setPhone(e.target.value)} />
        </label>

        <label>Email
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
        </label>

        <label>Password
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} required />
        </label>

        <button type="submit">Create account</button>
        {error && <div role="alert" className="error">{error}</div>}
      </form>
    </main>
  );
}
// src/pages/Login.jsx
import React, { useState } from "react";
import api from "../services/api";
import { saveAuth } from "../services/auth";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  async function submit(e) {
    e.preventDefault();
    setError("");
    try {
      const res = await api.post("/auth/login", { email, password });
      const { token, user } = res.data;
      saveAuth(token, user);
      // redirect based on role
      if (user?.role === "donor") navigate("/donor");
      else if (user?.role === "orphanage") navigate("/orphanage");
      else if (user?.role === "admin") navigate("/admin");
      else navigate("/");
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.error || "Login failed");
    }
  }

  return (
    <main className="container">
      <h2>Login</h2>
      <form onSubmit={submit} aria-label="login form">
        <label>Email
          <input value={email} onChange={e => setEmail(e.target.value)} type="email" required />
        </label>
        <label>Password
          <input value={password} onChange={e => setPassword(e.target.value)} type="password" required />
        </label>
        <button type="submit">Login</button>
        {error && <div role="alert" className="error">{error}</div>}
      </form>
    </main>
  );
}
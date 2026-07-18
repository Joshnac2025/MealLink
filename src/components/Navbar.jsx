import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* Top Blue Strip */}
      <div
        style={{
          height: "6px",
          background: "#d8e6ff",
        }}
      ></div>

      {/* Navbar */}
      <nav
        style={{
          background: "#fff",
          borderBottom: "1px solid #eee",
          position: "sticky",
          top: 0,
          zIndex: 1000,
        }}
      >
        <div
          className="container"
          style={{
            maxWidth: "1150px",
            margin: "0 auto",
            height: "70px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* Logo */}
          <Link
            to="/"
            style={{
              fontSize: "28px",
              fontWeight: "700",
              color: "#2E7D32",
              textDecoration: "none",
            }}
          >
            MealLink
          </Link>

          {/* Center Navigation */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "24px",
            }}
          >
            <Link
              to="/"
              style={{
                textDecoration: "none",
                color: "#333",
                padding: "8px 14px",
                border: isActive("/")
                  ? "2px solid #1b5e20"
                  : "2px solid transparent",
                borderRadius: "8px",
                fontWeight: 500,
              }}
            >
              Home
            </Link>

            <Link
              to="/about"
              style={{
                textDecoration: "none",
                color: "#333",
              }}
            >
              About
            </Link>

            <Link
              to="/community"
              style={{
                textDecoration: "none",
                color: "#333",
              }}
            >
              Community Meal
            </Link>

            <Link
              to="/contact"
              style={{
                textDecoration: "none",
                color: "#333",
              }}
            >
              Contact
            </Link>

            {/* Language */}
            <select
              style={{
                padding: "8px 12px",
                borderRadius: "6px",
                border: "1px solid #ccc",
                cursor: "pointer",
              }}
            >
              <option>English</option>
              <option>తెలుగు</option>
              <option>हिन्दी</option>
            </select>

            {/* Login */}
            <Link
              to="/login"
              style={{
                padding: "8px 18px",
                border: "2px solid #2E7D32",
                borderRadius: "6px",
                color: "#2E7D32",
                textDecoration: "none",
                fontWeight: 500,
              }}
            >
              Login
            </Link>

            {/* Register */}
            <Link
              to="/register"
              style={{
                padding: "8px 18px",
                border: "2px solid #2E7D32",
                borderRadius: "6px",
                color: "#2E7D32",
                textDecoration: "none",
                fontWeight: 500,
              }}
            >
              Register
            </Link>

            {/* Donate */}
            <Link
              to="/register"
              style={{
                background: "#2E7D32",
                color: "#fff",
                padding: "9px 20px",
                borderRadius: "6px",
                textDecoration: "none",
                fontWeight: 600,
              }}
            >
              Donate
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
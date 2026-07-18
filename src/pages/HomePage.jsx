import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
  const [stats, setStats] = useState({
    donations: 0,
    donors: 0,
    orphanages: 0,
  });

  useEffect(() => {
    const users =
      JSON.parse(localStorage.getItem("meallink_users")) || [];
    const donations =
      JSON.parse(localStorage.getItem("meallink_donations")) || [];

    setStats({
      donations: donations.length,
      donors: users.filter((u) => u.role === "donor").length,
      orphanages: users.filter((u) => u.role === "orphanage").length,
    });
  }, []);

  return (
    <div>

      {/* Hero Section */}
<section
  style={{
    background: "linear-gradient(135deg,#eef9ee,#dff3df)",
    padding: "90px 20px",
  }}
>
  <div
    className="container"
    style={{
      maxWidth: "1200px",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      alignItems: "center",
      gap: "60px",
    }}
  >
    {/* Left Content */}
    <div>
      <h1
        style={{
          fontSize: "3.7rem",
          fontWeight: "800",
          color: "#176b2d",
          lineHeight: "1.15",
          marginBottom: "25px",
        }}
      >
        Turning Surplus
        <br />
        into Smiles 💚
      </h1>

      <p
        style={{
          fontSize: "1.15rem",
          color: "#555",
          lineHeight: "1.8",
          maxWidth: "500px",
          marginBottom: "35px",
        }}
      >
        MealLink connects donors, orphanages, and volunteers to rescue
        surplus food and deliver it to children in need—reducing waste and
        creating smiles.
      </p>

      <div style={{ display: "flex", gap: "15px" }}>
        <button
          style={{
            background: "#2E7D32",
            color: "#fff",
            border: "none",
            padding: "14px 28px",
            borderRadius: "8px",
            fontSize: "16px",
            fontWeight: "600",
            cursor: "pointer",
          }}
        >
          Donate Now
        </button>

        <button
          style={{
            background: "#fff",
            color: "#2E7D32",
            border: "2px solid #2E7D32",
            padding: "14px 28px",
            borderRadius: "8px",
            fontSize: "16px",
            fontWeight: "600",
            cursor: "pointer",
          }}
        >
          Register
        </button>
      </div>
    </div>

    {/* Right Image */}
    <div style={{ textAlign: "center" }}>
      <img
        src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=900"
        alt="Children receiving meals"
        style={{
          width: "100%",
          maxWidth: "560px",
          borderRadius: "20px",
          boxShadow: "0 15px 40px rgba(0,0,0,0.15)",
        }}
      />
    </div>
  </div>
</section>

      {/* How It Works */}

      <section
        style={{
          padding: "70px 20px",
          background: "#f8f9fa",
        }}
      >
        <div className="container">

          <h2
            style={{
              textAlign: "center",
              marginBottom: "50px",
              color: "#166534",
            }}
          >
            How It Works
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit,minmax(250px,1fr))",
              gap: "30px",
            }}
          >
            {[
              {
                icon: "🍲",
                title: "Donate Food",
                text:
                  "Restaurants and individuals can donate surplus food easily.",
              },
              {
                icon: "🏠",
                title: "Orphanages Connect",
                text:
                  "Orphanages can view and accept donations in real-time.",
              },
              {
                icon: "🎉",
                title: "Celebrate",
                text:
                  "Sponsor meals for special occasions and spread joy.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="card"
                style={{
                  padding: "35px",
                  textAlign: "center",
                  borderRadius: "15px",
                }}
              >
                <div style={{ fontSize: "45px" }}>{item.icon}</div>

                <h4
                  style={{
                    marginTop: "20px",
                    color: "#166534",
                  }}
                >
                  {item.title}
                </h4>

                <p style={{ color: "#666" }}>
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose */}

      <section
        style={{
          padding: "80px 20px",
        }}
      >
        <div className="container">

          <h2
            style={{
              textAlign: "center",
              color: "#166534",
            }}
          >
            Why Choose MealLink?
          </h2>

          <p
            style={{
              textAlign: "center",
              color: "#666",
              maxWidth: "700px",
              margin: "20px auto 50px",
            }}
          >
            We make food donation simple, transparent and impactful by
            connecting donors, orphanages and volunteers on one trusted
            platform.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit,minmax(220px,1fr))",
              gap: "25px",
            }}
          >
            {[
              {
                icon: "🌱",
                title: "Reduce Food Waste",
                text:
                  "Save perfectly good surplus food from going to waste.",
              },
              {
                icon: "❤️",
                title: "Feed Children",
                text:
                  "Ensure nutritious meals reach children in need.",
              },
              {
                icon: "🤝",
                title: "Trusted Community",
                text:
                  "Verified donors, orphanages and volunteers working together.",
              },
              {
                icon: "⚡",
                title: "Fast & Easy",
                text:
                  "Donate or accept food in just a few clicks.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="card"
                style={{
                  padding: "30px",
                  textAlign: "center",
                }}
              >
                <div style={{ fontSize: "40px" }}>{item.icon}</div>

                <h4
                  style={{
                    marginTop: "15px",
                    color: "#166534",
                  }}
                >
                  {item.title}
                </h4>

                <p style={{ color: "#666" }}>
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact */}

      <section
        style={{
          background: "#166534",
          color: "white",
          padding: "70px 20px",
        }}
      >
        <div className="container">

          <h2
            style={{
              textAlign: "center",
              marginBottom: "50px",
            }}
          >
            Our Impact
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit,minmax(220px,1fr))",
              gap: "30px",
              textAlign: "center",
            }}
          >
            <div>
              <h1>{stats.donations}+</h1>
              <p>Donations Made</p>
            </div>

            <div>
              <h1>{stats.donors}+</h1>
              <p>Total Donors</p>
            </div>

            <div>
              <h1>{stats.orphanages}+</h1>
              <p>Registered Orphanages</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
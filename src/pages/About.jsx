import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div>

      {/* Hero Section */}
      <section
        style={{
          background: "linear-gradient(135deg,#eef9ee,#dff3df)",
          padding: "80px 20px",
          textAlign: "center",
        }}
      >
        <div className="container">
          <h1
            style={{
              fontSize: "3rem",
              color: "var(--primary-dark)",
              marginBottom: "20px",
            }}
          >
            About MealLink
          </h1>

          <p
            style={{
              maxWidth: "750px",
              margin: "0 auto",
              color: "var(--text-secondary)",
              fontSize: "1.1rem",
            }}
          >
            MealLink is dedicated to reducing food waste by connecting generous
            donors with orphanages and communities in need.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="container" style={{ padding: "40px 0 20px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
            gap: "30px",
          }}
        >
          <div className="card">
            <h2>🌍 Our Mission</h2>
            <p style={{ marginTop: "15px", color: "var(--text-secondary)" }}>
              To reduce food waste while ensuring every child receives nutritious
              meals through technology and community support.
            </p>
          </div>

          <div className="card">
            <h2>🎯 Our Vision</h2>
            <p style={{ marginTop: "15px", color: "var(--text-secondary)" }}>
              A world where no food goes to waste and no child sleeps hungry.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
<section
  className="bg-white"
  style={{
    paddingTop: "5px",
    paddingBottom: "25px",
    paddingLeft: "20px",
    paddingRight: "20px",
  }}
>
  <div
  style={{
    maxWidth: "800px",
    margin: "0 auto",
    textAlign: "center",
    padding: "0 20px",
  }}
>
    <h2
  style={{
    color: "var(--primary-dark)",
    fontSize: "2rem",
    fontWeight: "700",
    marginBottom: "25px",
  }}
>
  Our Story
</h2>

<div
  style={{
    width: "70px",
    height: "4px",
    background: "var(--primary-dark)",
    margin: "0 auto 22px",
    borderRadius: "999px",
  }}
></div>
    
    <p
  style={{
    fontSize: "1.15rem",
    lineHeight: "1.9",
    color: "var(--text-secondary)",
  }}
>
  Every day, perfectly good food goes to waste while many children
  struggle to access nutritious meals.
</p>
    
      <p
  style={{
    marginTop: "15px",
    fontSize: "1.15rem",
    lineHeight: "1.9",
    color: "var(--text-secondary)",
  }}
>
  MealLink was created to bridge this gap by connecting food donors,
  orphanages, and volunteers through one simple, transparent, and
  reliable platform.
</p>

  </div>
</section>


{/* Our Impact */}
<section
  className="bg-gray-50"
  style={{
    padding: "5px 20px 30px",
  }}
>
  <div className="container">

    <h2
      style={{
        textAlign: "center",
        color: "var(--primary-dark)",
        marginBottom: "30px",
        fontSize: "1.8rem",
        fontWeight: "700",
      }}
    >
      Our Impact
    </h2>

    <div className="impact-grid">

      <div className="card">
        <h2>1000+</h2>
        <p>Meals Shared</p>
      </div>

      <div className="card">
        <h2>500+</h2>
        <p>Children Supported</p>
      </div>

      <div className="card">
        <h2>40+</h2>
        <p>Partner Orphanages</p>
      </div>

      <div className="card">
        <h2>150+</h2>
        <p>Registered Donors</p>
      </div>

    </div>

  </div>
</section>

{/* Call to Action */}
<section
  style={{
    marginTop: "0px",
    background: "var(--primary-dark)",
    color: "white",
    padding: "70px 20px",
    textAlign: "center",
    marginBottom: "20px"
  }}
>
  <div className="container">
    <h2
      style={{
        fontSize: "2.6rem",
        fontWeight: "700",
        marginBottom: "20px",
      }}
    >
      Ready to Make a Difference?
    </h2>

    <p
      style={{
        maxWidth: "700px",
        margin: "0 auto 35px",
        fontSize: "1.1rem",
        lineHeight: "1.8",
      }}
    >
      Join MealLink today and help reduce food waste while bringing smiles to
      children in need.
    </p>

    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "20px",
        flexWrap: "wrap",
      }}
    >
      {/* Register Button */}
      <Link
        to="/register"
        className="btn"
        style={{
          background: "white",
          color: "var(--primary-dark)",
          border: "none",
          padding: "12px 30px",
          borderRadius: "8px",
          fontWeight: "600",
          transition: "all 0.3s ease",
        }}
      >
        Register
      </Link>

      {/* Donate Button */}
      <Link
  to="/donate"
  className="btn btn-outline"
  style={{
    color: "#fff",
    border: "2px solid #fff",
    background: "transparent",
  }}
>
  Donate Now
</Link>
    </div>
  </div>
</section>

</div>
  );
}
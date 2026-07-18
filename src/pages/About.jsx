import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div>

      {/* Hero Section */}
      <section
        style={{
          background: "linear-gradient(135deg,#eef9ee,#dff3df)",
          padding: "90px 20px",
          textAlign: "center",
        }}
      >
        <div
          className="container"
          style={{
            maxWidth: "900px",
            margin: "0 auto",
          }}
        >
          <h1
            style={{
              fontSize: "3.5rem",
              color: "#176B2D",
              fontWeight: "700",
              marginBottom: "20px",
            }}
          >
            About MealLink
          </h1>

          <p
            style={{
              color: "#555",
              fontSize: "1.1rem",
              lineHeight: "1.8",
            }}
          >
            MealLink is dedicated to reducing food waste by connecting generous
            donors with orphanages and communities in need.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section
        className="container"
        style={{
          padding: "70px 20px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
            gap: "25px",
          }}
        >
          <div
            style={{
              background: "#fff",
              padding: "30px",
              borderRadius: "16px",
              boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
              transition: ".3s",
            }}
          >
            <h2 style={{ color: "#176B2D", marginBottom: "18px" }}>
              🌍 Our Mission
            </h2>

            <p style={{ color: "#555", lineHeight: "1.8" }}>
              To reduce food waste while ensuring every child receives nutritious
              meals through technology and community support.
            </p>
          </div>

          <div
            style={{
              background: "#fff",
              padding: "30px",
              borderRadius: "16px",
              boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
              transition: ".3s",
            }}
          >
            <h2 style={{ color: "#176B2D", marginBottom: "18px" }}>
              🎯 Our Vision
            </h2>

            <p style={{ color: "#555", lineHeight: "1.8" }}>
              A world where no food goes to waste and no child sleeps hungry.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section
        style={{
          padding: "20px 20px 80px",
          textAlign: "center",
        }}
      >
        <div
          className="container"
          style={{
            maxWidth: "850px",
            margin: "0 auto",
          }}
        >
          <h2
            style={{
              fontSize: "2.3rem",
              color: "#176B2D",
            }}
          >
            Our Story
          </h2>

          <div
            style={{
              width: "70px",
              height: "4px",
              background: "#2E7D32",
              margin: "15px auto 35px",
              borderRadius: "30px",
            }}
          />

          <p
            style={{
              color: "#555",
              lineHeight: "2",
              fontSize: "1.08rem",
              marginBottom: "25px",
            }}
          >
            Every day, perfectly good food goes to waste while many children
            struggle to access nutritious meals.
          </p>

          <p
            style={{
              color: "#555",
              lineHeight: "2",
              fontSize: "1.08rem",
            }}
          >
            MealLink was created to bridge this gap by connecting food donors,
            orphanages, and volunteers through one simple, transparent, and
            reliable platform. Together, we transform surplus food into hope,
            smiles, and healthier futures.
          </p>
        </div>
      </section>

      {/* Our Impact */}
      <section
        className="container"
        style={{
          paddingBottom: "80px",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            color: "#176B2D",
            marginBottom: "15px",
            fontSize: "2.3rem",
          }}
        >
          Our Impact
        </h2>

        <div
          style={{
            width: "70px",
            height: "4px",
            background: "#2E7D32",
            margin: "0 auto 45px",
            borderRadius: "30px",
          }}
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
            gap: "25px",
          }}
        >
          {[
            {
              icon: "🍽️",
              value: "1000+",
              label: "Meals Shared",
            },
            {
              icon: "❤️",
              value: "500+",
              label: "Children Supported",
            },
            {
              icon: "🏠",
              value: "40+",
              label: "Partner Orphanages",
            },
            {
              icon: "🤝",
              value: "150+",
              label: "Registered Donors",
            },
          ].map((item, index) => (
            <div
              key={index}
              style={{
                background: "#fff",
                padding: "35px",
                textAlign: "center",
                borderRadius: "16px",
                boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
                transition: ".3s",
              }}
            >
              <div
                style={{
                  fontSize: "2.5rem",
                  marginBottom: "15px",
                }}
              >
                {item.icon}
              </div>

              <h2
                style={{
                  color: "#2E7D32",
                  fontSize: "2rem",
                }}
              >
                {item.value}
              </h2>

              <p
                style={{
                  color: "#666",
                }}
              >
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          background: "#1B5E20",
          padding: "90px 20px",
          textAlign: "center",
          color: "#fff",
        }}
      >
        <div
          className="container"
          style={{
            maxWidth: "800px",
          }}
        >
          <h2
            style={{
              fontSize: "3rem",
              marginBottom: "20px",
            }}
          >
            Ready to Make a Difference?
          </h2>

          <p
            style={{
              marginBottom: "40px",
              lineHeight: "1.8",
              fontSize: "1.1rem",
            }}
          >
            Join MealLink today and help reduce food waste while bringing smiles
            to children in need.
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "20px",
              flexWrap: "wrap",
            }}
          >
            <Link
              to="/register"
              style={{
                background: "#fff",
                color: "#2E7D32",
                padding: "14px 30px",
                borderRadius: "8px",
                textDecoration: "none",
                fontWeight: "600",
              }}
            >
              Register
            </Link>

            <Link
              to="/donor"
              style={{
                border: "2px solid white",
                color: "#fff",
                padding: "14px 30px",
                borderRadius: "8px",
                textDecoration: "none",
                fontWeight: "600",
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
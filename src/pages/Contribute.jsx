import React from "react";

export default function Contribute() {
  return (
    <div>

      {/* Hero Section */}

      <section
        style={{
          background: "linear-gradient(135deg,#EEF8EF,#DFF3DF)",
          padding: "90px 20px",
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
          <div
            style={{
              display: "inline-block",
              background: "#EDF7ED",
              color: "#2E7D32",
              padding: "6px 14px",
              borderRadius: "20px",
              fontWeight: "600",
              fontSize: "0.85rem",
              marginBottom: "20px",
            }}
          >
            Make a Difference
          </div>

          <h1
            style={{
              fontSize: "3rem",
              color: "#1F2937",
              marginBottom: "18px",
            }}
          >
            Contribute to This Campaign
          </h1>

          <p
            style={{
              color: "#555",
              lineHeight: "1.8",
              maxWidth: "700px",
              margin: "0 auto",
            }}
          >
            Support children by donating essential items. Every contribution
            helps reduce food waste and creates a meaningful impact in the
            community.
          </p>
        </div>
      </section>

      {/* Campaign Summary */}

<section
  className="container"
  style={{
    marginTop: "-45px",
    marginBottom: "70px",
  }}
>
  <div
    className="card"
    style={{
      maxWidth: "900px",
      margin: "0 auto",
      padding: "35px",
    }}
  >
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: "20px",
        marginBottom: "25px",
      }}
    >
      <div>
        <h2
          style={{
            color: "#1F2937",
            marginBottom: "10px",
          }}
        >
          Healthy Meal Drive
        </h2>

        <p style={{ color: "#555", marginBottom: "6px" }}>
          Little Hearts Orphanage
        </p>

        <p style={{ color: "#555" }}>
          Hyderabad • 45 Children
        </p>
      </div>

      <div
        style={{
          textAlign: "right",
        }}
      >
        <h3
          style={{
            color: "#2E7D32",
            marginBottom: "5px",
          }}
        >
          72%
        </h3>

        <p style={{ color: "#666" }}>
          Campaign Completed
        </p>
      </div>
    </div>

    {/* Progress Bar */}

    <div
      style={{
        height: "10px",
        background: "#E5E7EB",
        borderRadius: "20px",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          width: "72%",
          height: "100%",
          background: "#2E7D32",
        }}
      />
    </div>

    {/* Stats */}

    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        marginTop: "30px",
        gap: "20px",
      }}
    >
      <div>
        <h4 style={{ color: "#2E7D32" }}>28</h4>
        <p>Contributors</p>
      </div>

      <div>
        <h4 style={{ color: "#2E7D32" }}>120</h4>
        <p>Items Received</p>
      </div>

      <div>
        <h4 style={{ color: "#2E7D32" }}>5</h4>
        <p>Days Left</p>
      </div>
    </div>
  </div>
</section>

{/* Contribution Form */}

<section
  className="container"
  style={{
    padding: "20px 20px 70px",
  }}
>
  <div
    className="card"
    style={{
      maxWidth: "900px",
      margin: "0 auto",
      padding: "40px",
    }}
  >
    <h2
      style={{
        color: "#1F2937",
        marginBottom: "35px",
      }}
    >
      Contribution Details
    </h2>

    {/* Personal Information */}

    <h3
      style={{
        color: "#2E7D32",
        marginBottom: "20px",
      }}
    >
      Personal Information
    </h3>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
        gap: "20px",
        marginBottom: "35px",
      }}
    >
      <input
        type="text"
        placeholder="Full Name"
        className="form-input"
      />

      <input
        type="email"
        placeholder="Email Address"
        className="form-input"
      />

      <input
        type="tel"
        placeholder="Phone Number"
        className="form-input"
      />
    </div>

    {/* Contribution Information */}

    <h3
      style={{
        color: "#2E7D32",
        marginBottom: "20px",
      }}
    >
      Contribution Information
    </h3>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
        gap: "20px",
      }}
    >
      <select className="form-input">
        <option>Select Contribution Type</option>
        <option>Food Supplies</option>
        <option>Books</option>
        <option>Clothing</option>
        <option>Hygiene Kits</option>
      </select>

      <input
        type="number"
        placeholder="Number of Items"
        className="form-input"
      />

      <input
        type="date"
        className="form-input"
      />
    </div>

    <textarea
      placeholder="Pickup Address"
      className="form-input"
      rows="4"
      style={{
        marginTop: "20px",
        width: "100%",
      }}
    />

    <textarea
      placeholder="Additional Notes (Optional)"
      className="form-input"
      rows="4"
      style={{
        marginTop: "20px",
        width: "100%",
      }}
    />

    <div
      style={{
        textAlign: "center",
        marginTop: "35px",
      }}
    >
      <button className="btn btn-primary">
        Submit Contribution
      </button>
    </div>
  </div>
</section>

{/* Contribution Guidelines */}

<section
  style={{
    background: "#F8FBF8",
    padding: "80px 20px",
  }}
>
  <div className="container">

    <h2
      style={{
        textAlign: "center",
        color: "#1F2937",
        marginBottom: "15px",
      }}
    >
      Contribution Guidelines
    </h2>

    <p
      style={{
        textAlign: "center",
        color: "#666",
        marginBottom: "50px",
      }}
    >
      Please follow these simple guidelines to ensure your contribution reaches
      children safely.
    </p>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
        gap: "25px",
      }}
    >
      {[
        {
          title: "Accepted Items",
          text: "Fresh food, groceries, books, clothes and hygiene essentials.",
        },
        {
          title: "Packaging",
          text: "Ensure all donated items are clean, properly packed and safe.",
        },
        {
          title: "Pickup",
          text: "Our volunteers will contact you to schedule pickup.",
        },
        {
          title: "Transparency",
          text: "You'll receive updates once your contribution is delivered.",
        },
      ].map((item) => (
        <div
          key={item.title}
          className="card"
          style={{
            padding: "30px",
            textAlign: "center",
          }}
        >
          <h3
            style={{
              color: "#2E7D32",
              marginBottom: "15px",
            }}
          >
            {item.title}
          </h3>

          <p
            style={{
              color: "#555",
              lineHeight: "1.7",
            }}
          >
            {item.text}
          </p>
        </div>
      ))}
    </div>

  </div>
</section>

{/* How It Works */}

<section
  className="container"
  style={{
    padding: "80px 20px",
  }}
>
  <h2
    style={{
      textAlign: "center",
      color: "#1F2937",
      marginBottom: "50px",
    }}
  >
    How It Works
  </h2>

  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))",
      gap: "25px",
      textAlign: "center",
    }}
  >
    {[
      "Submit Contribution",
      "Verification",
      "Pickup Scheduled",
      "Delivered",
      "Campaign Updated",
    ].map((step, index) => (
      <div
        key={step}
        className="card"
        style={{
          padding: "30px",
        }}
      >
        <div
          style={{
            width: "45px",
            height: "45px",
            borderRadius: "50%",
            background: "#2E7D32",
            color: "#fff",
            margin: "0 auto 18px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: "600",
          }}
        >
          {index + 1}
        </div>

        <h4
          style={{
            color: "#1F2937",
          }}
        >
          {step}
        </h4>
      </div>
    ))}
  </div>
</section>

{/* Final CTA */}

<section
  style={{
    background: "linear-gradient(135deg,#2E7D32,#4CAF50)",
    color: "#fff",
    padding: "80px 20px",
    textAlign: "center",
  }}
>
  <div
    className="container"
    style={{
      maxWidth: "700px",
      margin: "0 auto",
    }}
  >
    <h2
      style={{
        fontSize: "2.3rem",
        marginBottom: "20px",
      }}
    >
      Thank You for Supporting Our Mission
    </h2>

    <p
      style={{
        lineHeight: "1.8",
        marginBottom: "35px",
        opacity: "0.95",
      }}
    >
      Every contribution helps reduce food waste and brings hope to children.
      Together, we can build a stronger and more caring community.
    </p>

    <p
  style={{
    fontSize: "1.1rem",
    fontWeight: "500",
    lineHeight: "1.8",
    opacity: "0.95",
    maxWidth: "600px",
    margin: "0 auto",
  }}
>
  Thank you for supporting children and reducing food waste. Together, every contribution creates lasting impact.
</p>
  </div>
</section>

    </div>
  );
}
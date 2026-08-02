import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Contribute() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
  donor_id: 2,
  donation_type: "",
  quantity: "",
  prepared_time: "",
  pickup_address: "",
  notes: "",
  item_description: "Rice and cooked meals",
  item_condition: "Good",
  hygiene_confirmed: true,
});

  const handleSubmit = async () => {
    try {
      setLoading(true);

      const payload = {
        donor_id: formData.donor_id,
        donation_type: formData.donation_type,
        quantity: formData.quantity,
        location: formData.pickup_address,
        description: formData.notes,
        quality_info: formData.item_condition,
        prepared_time: formData.prepared_time
          ? `${formData.prepared_time} 18:00:00`
          : null,
      };
      const response = await axios.post(
        "http://127.0.0.1:5000/api/donors/donor/add_donation",
        payload
      );

      const donationId = response.data.donation_id;

      const aiResponse = await fetch(
        `http://127.0.0.1:5000/api/recommend/${donationId}`,
        { method: "POST" }
      );

      const aiData = await aiResponse.json();

      navigate(`/ai-recommendation/${donationId}`, { state: aiData,
});
    
    } catch (err) {
  console.log("FULL ERROR:", err);

  if (err.response) {
    console.log("BACKEND RESPONSE:", err.response.data);
    alert(JSON.stringify(err.response.data));
  } else {
    alert(err.message);
  }
} finally {
  setLoading(false);
}
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  
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
        value={formData.email}
        onChange={(e) =>
          setFormData({ ...formData, email: e.target.value })
        }
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
      <select
        className="form-input"
        value={formData.donation_type}
        onChange={(e) =>
          setFormData({
            ...formData,
            donation_type: e.target.value,
    })
  }
>
  <option value="">Select Contribution Type</option>
  <option value="Food Supplies">Food Supplies</option>
  <option value="Books">Books</option>
  <option value="Clothing">Clothing</option>
  <option value="Hygiene Kits">Hygiene Kits</option>
</select>

      <input
        type="number"
        className="form-input"
        value={formData.quantity}
        onChange={(e) =>
          setFormData({
            ...formData,
            quantity: e.target.value,
    })
  }
/>
      
      <input
        type="date"
        className="form-input"
        value={formData.prepared_time}
        onChange={(e) =>
          setFormData({
            ...formData,
            prepared_time: e.target.value,
    })
  }
/>
    </div>

    <textarea
      placeholder="Pickup Address"
      className="form-input"
      rows="4"
      value={formData.pickup_address}
      onChange={(e) =>
        setFormData({
          ...formData,
          pickup_address: e.target.value,
        })
      }
      style={{
        marginTop: "20px",
        width: "100%",
  }}
/>

    <textarea
      placeholder="Additional Notes (Optional)"
      className="form-input"
      rows="4"
      value={formData.notes}
      onChange={(e) =>
        setFormData({
          ...formData,
          notes: e.target.value,
        })
      }
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
     
     <button
  className="btn btn-primary"
  disabled={loading}
  onClick={handleSubmit}
>
  {loading ? "Getting AI Recommendation..." : "Submit Contribution"}
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
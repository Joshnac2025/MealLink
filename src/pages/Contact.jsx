import React from "react";
export default function Contact() {
    return (
        <div>
   
{/* Hero Section */}
<section
  style={{
    background: "linear-gradient(135deg,#eef9ee,#dff3df)",
    padding: "110px 20px",
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
      Contact & Support
    </h1>

    <p
      style={{
        maxWidth: "700px",
        margin: "0 auto",
        color: "var(--text-secondary)",
        fontSize: "1.1rem",
        lineHeight: "1.8",
      }}
    >
      Have a question, need assistance, or want to share your ideas?
      We're here to help make MealLink better for everyone.
    </p>
  </div>
</section>

{/* Contact Information */}
<section
  className="container"
  style={{ padding: "60px 0" }}
>
  <h2
    style={{
      textAlign: "center",
      color: "var(--primary-dark)",
      marginBottom: "40px",
      fontSize: "2rem",
    }}
  >
    Get in Touch
  </h2>

  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
      gap: "25px",
    }}
  >
    <div className="card" style={{ textAlign: "center" }}>
      <h2>📧</h2>
      <h3>Email</h3>
      <p>support@meallink.org</p>
    </div>

    <div className="card" style={{ textAlign: "center" }}>
      <h2>📞</h2>
      <h3>Phone</h3>
      <p>+91 XXXXX XXXXX</p>
    </div>

    <div className="card" style={{ textAlign: "center" }}>
      <h2>📍</h2>
      <h3>Location</h3>
      <p>Hyderabad, Telangana</p>
    </div>
  </div>
</section>

{/* Why Contact Us */}
<section
  style={{
    background: "#f8faf8",
    padding: "60px 20px",
  }}
>
  <div className="container">

    <h2
      style={{
        textAlign: "center",
        color: "var(--primary-dark)",
        marginBottom: "40px",
        fontSize: "2rem",
      }}
    >
      Why Contact Us?
    </h2>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
        gap: "25px",
      }}
    >
      <div className="card" style={{ textAlign: "center" }}>
        <h2>🍱</h2>
        <h3>Donation Support</h3>
        <p>Need help with food donations or pickup?</p>
      </div>

      <div className="card" style={{ textAlign: "center" }}>
        <h2>🤝</h2>
        <h3>Partnerships</h3>
        <p>Collaborate with MealLink to create a bigger impact.</p>
      </div>

      <div className="card" style={{ textAlign: "center" }}>
        <h2>🙋</h2>
        <h3>Volunteer Help</h3>
        <p>Join our volunteer community and support food distribution.</p>
      </div>

      <div className="card" style={{ textAlign: "center" }}>
        <h2>💬</h2>
        <h3>General Queries</h3>
        <p>Have questions? We're happy to assist you.</p>
      </div>

    </div>
  </div>
</section>

{/* Choose How We Can Help */}
<section
  style={{
    padding: "70px 20px",
    background: "#ffffff",
  }}
>
  <div className="container">

    <h2
      style={{
        textAlign: "center",
        color: "var(--primary-dark)",
        fontSize: "2rem",
        marginBottom: "15px",
      }}
    >
      Choose How We Can Help
    </h2>

    <p
      style={{
        textAlign: "center",
        color: "var(--text-secondary)",
        maxWidth: "700px",
        margin: "0 auto 50px",
      }}
    >
      Select the area you'd like assistance with and we'll guide you to the right support.
    </p>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "25px",
      }}
    >

      <div className="card" style={{ padding: "30px", textAlign: "center" }}>
        <div style={{ fontSize: "3rem" }}>🍱</div>
        <h3>Donation Support</h3>
        <p style={{ color: "var(--text-secondary)" }}>
          Need help donating food or scheduling a pickup?
        </p>
      </div>

      <div className="card" style={{ padding: "30px", textAlign: "center" }}>
        <div style={{ fontSize: "3rem" }}>🏠</div>
        <h3>Orphanage Support</h3>
        <p style={{ color: "var(--text-secondary)" }}>
          Assistance with registrations and meal requests.
        </p>
      </div>

      <div className="card" style={{ padding: "30px", textAlign: "center" }}>
        <div style={{ fontSize: "3rem" }}>🤝</div>
        <h3>Partnerships</h3>
        <p style={{ color: "var(--text-secondary)" }}>
          Collaborate with MealLink and create greater impact.
        </p>
      </div>

      <div className="card" style={{ padding: "30px", textAlign: "center" }}>
        <div style={{ fontSize: "3rem" }}>💬</div>
        <h3>Feedback</h3>
        <p style={{ color: "var(--text-secondary)" }}>
          Share ideas, suggestions and improvements with us.
        </p>
      </div>

    </div>
  </div>
</section>

{/* Send us a Message */}
<section
  style={{
    padding: "80px 20px",
    background: "#eef3f0",
  }}
>
  <div
    className="container"
    style={{
      maxWidth: "900px",
      margin: "0 auto",
    }}
  >
    <div
      style={{
        background: "#fff",
        borderRadius: "18px",
        padding: "50px",
        boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          color: "var(--primary-dark)",
          fontSize: "2.2rem",
          marginBottom: "15px",
        }}
      >
        Send us a Message
      </h2>

      <p
        style={{
          textAlign: "center",
          color: "var(--text-secondary)",
          marginBottom: "40px",
        }}
      >
        We'd love to hear from you. Fill out the form below and we'll get back to you.
      </p>

      <form
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <input
          type="text"
          placeholder="Full Name"
          style={{
            padding: "15px",
            borderRadius: "10px",
            border: "1px solid #ddd",
            fontSize: "1rem",
          }}
        />

        <input
          type="email"
          placeholder="Email Address"
          style={{
            padding: "15px",
            borderRadius: "10px",
            border: "1px solid #ddd",
            fontSize: "1rem",
          }}
        />

        <select
          style={{
            padding: "15px",
            borderRadius: "10px",
            border: "1px solid #ddd",
            fontSize: "1rem",
          }}
        >
          <option>General Inquiry</option>
          <option>Donation Support</option>
          <option>Volunteer Support</option>
          <option>Partnership</option>
          <option>Report an Issue</option>
          <option>Feature Request</option>
          <option>Feedback</option>
        </select>

        <input
          type="text"
          placeholder="Subject"
          style={{
            padding: "15px",
            borderRadius: "10px",
            border: "1px solid #ddd",
            fontSize: "1rem",
          }}
        />

        <textarea
          rows="6"
          placeholder="Write your message..."
          style={{
            padding: "15px",
            borderRadius: "10px",
            border: "1px solid #ddd",
            resize: "none",
            fontSize: "1rem",
          }}
        />
<button
  type="submit"
  style={{
    background: "#2E7D32",
    color: "white",
    border: "none",
    padding: "14px 40px",
    borderRadius: "10px",
    fontSize: "16px",
    fontWeight: "600",
    cursor: "pointer",
    alignSelf: "center",
    marginTop: "15px",
  }}
>
  Send Message
</button>
      </form>
    </div>
  </div>
</section>

{/* Feedback & Suggestions */}
<section
  style={{
    padding: "70px 20px",
    background: "linear-gradient(135deg,#eaf8ea,#dff3df)",
  }}
>
  <div
    className="container"
    style={{
      maxWidth: "700px",
      margin: "0 auto",
    }}
  >
    <div
      style={{
        background: "#fff",
        borderRadius: "18px",
        padding: "40px",
        textAlign: "center",
        boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
      }}
    >
      <h2
        style={{
          color: "var(--primary-dark)",
          marginBottom: "15px",
          fontSize: "2rem",
        }}
      >
        💚 Feedback & Suggestions
      </h2>

      <p
        style={{
          color: "var(--text-secondary)",
          marginBottom: "30px",
          lineHeight: "1.7",
        }}
      >
        Your ideas help us improve MealLink for donors, volunteers and
        orphanages. We'd love to hear your thoughts.
      </p>

      <select
        style={{
          width: "100%",
          padding: "15px",
          borderRadius: "10px",
          border: "1px solid #ddd",
          marginBottom: "20px",
        }}
      >
        <option>Feedback</option>
        <option>Suggestion</option>
        <option>Feature Request</option>
        <option>Appreciation</option>
        <option>Bug Report</option>
      </select>

      <textarea
        rows="5"
        placeholder="Share your thoughts..."
        style={{
          width: "100%",
          padding: "15px",
          borderRadius: "10px",
          border: "1px solid #ddd",
          resize: "none",
          marginBottom: "25px",
        }}
      />

      <button
        className="btn btn-primary"
        style={{
          padding: "14px 35px",
        }}
      >
        Share Feedback
      </button>
    </div>
  </div>
</section>

{/* Frequently Asked Questions */}
<section
  style={{
    padding: "80px 20px",
    background: "#ffffff",
  }}
>
  <div
    className="container"
    style={{
      maxWidth: "800px",
      margin: "0 auto",
    }}
  >
    <h2
      style={{
        textAlign: "center",
        color: "var(--primary-dark)",
        fontSize: "2rem",
        marginBottom: "15px",
      }}
    >
      Frequently Asked Questions
    </h2>

    <p
      style={{
        textAlign: "center",
        color: "var(--text-secondary)",
        marginBottom: "40px",
      }}
    >
      Find answers to some of the most common questions about MealLink.
    </p>

    <details
  style={{
    background: "#fff",
    padding: "18px",
    borderRadius: "12px",
    marginBottom: "15px",
    boxShadow: "0 5px 15px rgba(0,0,0,0.06)",
    cursor: "pointer",
  }}
>
  <summary
    style={{
      fontWeight: "600",
      color: "var(--primary-dark)",
      fontSize: "1.05rem",
    }}
  >
    🍱 How can I donate food?
  </summary>

  <p
    style={{
      marginTop: "15px",
      color: "var(--text-secondary)",
      lineHeight: "1.7",
    }}
  >
    Register as a donor, submit your donation details, and our volunteers
    will coordinate pickup and delivery.
  </p>
</details>
    
<details
  style={{
    background: "#fff",
    padding: "18px",
    borderRadius: "12px",
    marginBottom: "15px",
    boxShadow: "0 5px 15px rgba(0,0,0,0.06)",
    cursor: "pointer",
  }}
>
  <summary
    style={{
      fontWeight: "600",
      color: "var(--primary-dark)",
      fontSize: "1.05rem",
    }}
  >
    🏠 How do orphanages register?
  </summary>

  <p
    style={{
      marginTop: "15px",
      color: "var(--text-secondary)",
      lineHeight: "1.7",
    }}
  >
    Orphanages can register by creating an account and submitting the
    required verification details. Once approved, they can request and
    receive food donations through MealLink.
  </p>
</details>
    
    <details
  style={{
    background: "#fff",
    padding: "18px",
    borderRadius: "12px",
    marginBottom: "15px",
    boxShadow: "0 5px 15px rgba(0,0,0,0.06)",
    cursor: "pointer",
  }}
>
  <summary
    style={{
      fontWeight: "600",
      color: "var(--primary-dark)",
      fontSize: "1.05rem",
    }}
  >
    💚 Is MealLink free?
  </summary>

  <p
    style={{
      marginTop: "15px",
      color: "var(--text-secondary)",
      lineHeight: "1.7",
    }}
  >
    Yes! MealLink is completely free for donors, volunteers, and
    orphanages. Our goal is to connect surplus food with those in need
    without any charges.
  </p>
</details>
    
    <details
  style={{
    background: "#fff",
    padding: "18px",
    borderRadius: "12px",
    marginBottom: "15px",
    boxShadow: "0 5px 15px rgba(0,0,0,0.06)",
    cursor: "pointer",
  }}
>
  <summary
    style={{
      fontWeight: "600",
      color: "var(--primary-dark)",
      fontSize: "1.05rem",
    }}
  >
    🙋 Can I become a volunteer?
  </summary>

  <p
    style={{
      marginTop: "15px",
      color: "var(--text-secondary)",
      lineHeight: "1.7",
    }}
  >
    Absolutely! Volunteers play an important role in food collection,
    transportation, and distribution. Simply register with MealLink and
    join our mission to reduce food waste and fight hunger.
  </p>
</details>
  </div>
</section>

{/* Need Help */}
<section
  style={{
    padding: "70px 20px",
    background: "#f8faf8",
    textAlign: "center",
  }}
>
  <div
    style={{
      maxWidth: "700px",
      margin: "0 auto",
    }}
  >
    <h2
      style={{
        color: "var(--primary-dark)",
        marginBottom: "20px",
      }}
    >
      Need Immediate Assistance?
    </h2>

    <p
      style={{
        color: "var(--text-secondary)",
        lineHeight: "1.8",
      }}
    >
      Our team is here to help with donations, partnerships, volunteer support,
      and general inquiries.
    </p>

    <h3 style={{ marginTop: "25px" }}>
      📧 support@meallink.org
    </h3>

    <h3>
      📞 +91 XXXXX XXXXX
    </h3>
  </div>
</section>

{/* Thank You */}
<section
  style={{
    background: "var(--primary-dark)",
    color: "white",
    padding: "80px 20px",
    textAlign: "center",
  }}
>
  <div
    style={{
      maxWidth: "750px",
      margin: "0 auto",
    }}
  >
    <h2
      style={{
        fontSize: "2.3rem",
        marginBottom: "25px",
      }}
    >
      Thank You for Supporting MealLink 💚
    </h2>

    <p
      style={{
        fontSize: "1.15rem",
        lineHeight: "1.9",
      }}
    >
      Every message, suggestion, donation, and act of kindness helps us reduce
      food waste and bring hope to children in need.
      <br /><br />
      Together, we can build a future where no food is wasted and no child goes
      hungry.
    </p>
  </div>
</section>

</div>
    );
}
import React from "react";
import { useNavigate } from "react-router-dom";

export default function CampaignDetails() {
  const navigate = useNavigate();

  return (
    <div>

      {/* Hero Section */}

<section
  style={{
    background: "linear-gradient(135deg,#EEF8EF,#DFF3DF)",
    padding: "90px 20px",
  }}
>
  <div
    className="container"
    style={{
      maxWidth: "900px",
      margin: "0 auto",
      textAlign: "center",
    }}
  >

    <div
      style={{
        display: "inline-block",
        padding: "6px 14px",
        borderRadius: "20px",
        background: "#EDF7ED",
        color: "#2E7D32",
        fontWeight: "600",
        fontSize: "0.85rem",
        marginBottom: "20px",
      }}
    >
      Active Campaign
    </div>

    <h1
      style={{
        fontSize: "3rem",
        color: "#1F2937",
        marginBottom: "18px",
      }}
    >
      Healthy Meal Drive
    </h1>

    <p
      style={{
        fontSize: "1.1rem",
        color: "#666",
        marginBottom: "8px",
      }}
    >
      Little Hearts Orphanage
    </p>

    <p
      style={{
        color: "#666",
        marginBottom: "30px",
      }}
    >
      Hyderabad • 45 Children
    </p>

    <p
      style={{
        maxWidth: "700px",
        margin: "0 auto",
        lineHeight: "1.8",
        color: "#555",
      }}
    >
      Help provide nutritious meals for children by contributing food
      supplies. Every donation supports healthier lives while reducing
      food waste in our community.
    </p>

  </div>
</section>

<section
  className="container"
  style={{
    marginTop: "-45px",
    marginBottom: "60px",
  }}
>
  <div
    className="card"
    style={{
      padding: "35px",
      maxWidth: "850px",
      margin: "0 auto",
    }}
  >
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        marginBottom: "15px",
      }}
    >
      <strong>Contribution Progress</strong>

      <span
        style={{
          color: "#2E7D32",
          fontWeight: "600",
        }}
      >
        72% Completed
      </span>
    </div>

    <div
      style={{
        height: "12px",
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

    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginTop: "25px",
        flexWrap: "wrap",
        gap: "20px",
      }}
    >
      <div>
        <h3
          style={{
            color: "#2E7D32",
            marginBottom: "5px",
          }}
        >
          28
        </h3>
        <p>Contributors</p>
      </div>

      <div>
        <h3
          style={{
            color: "#2E7D32",
            marginBottom: "5px",
          }}
        >
          120
        </h3>
        <p>Items Donated</p>
      </div>

      <div>
        <h3
          style={{
            color: "#2E7D32",
            marginBottom: "5px",
          }}
        >
          5
        </h3>
        <p>Days Left</p>
      </div>
    </div>
  </div>
</section>

      {/* About Campaign */}

<section
  className="container"
  style={{
    padding: "30px 20px 70px",
  }}
>
  <div
    style={{
      maxWidth: "900px",
      margin: "0 auto",
    }}
  >
    <h2
      style={{
        color: "#1F2937",
        marginBottom: "20px",
        fontSize: "2rem",
      }}
    >
      About the Campaign
    </h2>

    <p
      style={{
        lineHeight: "1.9",
        color: "#555",
        fontSize: "1.05rem",
      }}
    >
      The Healthy Meal Drive aims to provide nutritious meals to children at
      Little Hearts Orphanage. By collecting surplus food and essential food
      supplies from generous contributors, this campaign helps reduce food
      waste while ensuring children receive healthy, balanced meals every day.
    </p>

    <p
      style={{
        marginTop: "20px",
        lineHeight: "1.9",
        color: "#555",
        fontSize: "1.05rem",
      }}
    >
      Every contribution, whether large or small, directly supports the
      well-being of children and strengthens our mission of building a caring
      and sustainable community.
    </p>
  </div>
</section>

      {/* Campaign Overview */}

<section
  className="container"
  style={{
    padding: "40px 20px 70px",
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
    <h2
      style={{
        color: "#1F2937",
        marginBottom: "30px",
      }}
    >
      Campaign Overview
    </h2>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
        gap: "25px",
      }}
    >
      <div>
        <p><strong>Location</strong></p>
        <p style={{ color: "#666" }}>Hyderabad</p>

        <br />

        <p><strong>Children Supported</strong></p>
        <p style={{ color: "#666" }}>45 Children</p>

        <br />

        <p><strong>Campaign Category</strong></p>
        <p style={{ color: "#666" }}>Food Assistance</p>
      </div>

      <div>
        <p><strong>Campaign Duration</strong></p>
        <p style={{ color: "#666" }}>15 July – 15 August 2026</p>

        <br />

        <p><strong>Organized By</strong></p>
        <p style={{ color: "#666" }}>Little Hearts Orphanage</p>

        <br />

        <p><strong>Status</strong></p>
        <p
          style={{
            color: "#2E7D32",
            fontWeight: "600",
          }}
        >
          Active
        </p>
      </div>
    </div>
  </div>
</section>

      {/* Items Needed */}

<section
  className="container"
  style={{
    padding: "70px 20px",
  }}
>
  <div
    style={{
      maxWidth: "900px",
      margin: "0 auto",
    }}
  >
    <h2
      style={{
        color: "#1F2937",
        marginBottom: "30px",
        fontSize: "2rem",
      }}
    >
      Items Needed
    </h2>

    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "15px",
      }}
    >
      {[
        "Rice",
        "Vegetables",
        "Milk",
        "Fruits",
        "Cooking Oil",
        "Bread",
        "Pulses",
        "Snacks",
      ].map((item) => (
        <div
          key={item}
          style={{
            background: "#EDF7ED",
            color: "#2E7D32",
            padding: "12px 20px",
            borderRadius: "30px",
            fontWeight: "600",
          }}
        >
          {item}
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Campaign Impact */}

<section
  style={{
    background: "#F8FBF8",
    padding: "80px 20px",
  }}
>
  <div
    className="container"
    style={{
      maxWidth: "950px",
      margin: "0 auto",
    }}
  >
    <h2
      style={{
        textAlign: "center",
        color: "#1F2937",
        marginBottom: "50px",
        fontSize: "2rem",
      }}
    >
      Your Contribution Makes an Impact
    </h2>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
        gap: "25px",
      }}
    >
      {[
        {
          title: "Nutritious Meals",
          text: "Provide healthy meals for children in need.",
        },
        {
          title: "Reduce Food Waste",
          text: "Redirect surplus food to where it matters most.",
        },
        {
          title: "Support Education",
          text: "Healthy children can focus better on learning.",
        },
        {
          title: "Build Community",
          text: "Encourage people to contribute together.",
        },
      ].map((impact) => (
        <div
          key={impact.title}
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
            {impact.title}
          </h3>

          <p
            style={{
              color: "#555",
              lineHeight: "1.7",
            }}
          >
            {impact.text}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Progress */}
      {/* Campaign Needs Progress */}

<section
  className="container"
  style={{
    padding: "70px 20px",
  }}
>
  <div
    style={{
      maxWidth: "900px",
      margin: "0 auto",
    }}
  >
    <h2
      style={{
        color: "#1F2937",
        marginBottom: "15px",
      }}
    >
      Campaign Needs Progress
    </h2>

    <p
      style={{
        color: "#666",
        marginBottom: "40px",
      }}
    >
      Track the contribution status for each requested item category.
    </p>

    {[
      {
        name: "Food Supplies",
        progress: 85,
      },
      {
        name: "Books",
        progress: 60,
      },
      {
        name: "Clothing",
        progress: 45,
      },
      {
        name: "Hygiene Kits",
        progress: 30,
      },
    ].map((item) => (
      <div
        key={item.name}
        style={{
          marginBottom: "28px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "8px",
          }}
        >
          <span
            style={{
              fontWeight: "600",
            }}
          >
            {item.name}
          </span>

          <span
            style={{
              color: "#2E7D32",
              fontWeight: "600",
            }}
          >
            {item.progress}%
          </span>
        </div>

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
              width: `${item.progress}%`,
              height: "100%",
              background: "#2E7D32",
            }}
          />
        </div>
      </div>
    ))}
  </div>
</section>

{/* Contribution Options */}

<section
  className="container"
  style={{
    padding: "70px 20px",
  }}
>
  <h2
    style={{
      textAlign: "center",
      color: "#1F2937",
      fontSize: "2rem",
      marginBottom: "15px",
    }}
  >
    Choose Your Contribution
  </h2>

  <p
    style={{
      textAlign: "center",
      color: "#666",
      maxWidth: "650px",
      margin: "0 auto 45px",
    }}
  >
    Select the type of contribution you would like to make for this campaign.
  </p>

  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
      gap: "25px",
    }}
  >

    <div className="card" style={{ padding: "30px", textAlign: "center" }}>
  <h3 style={{ color: "#1F2937" }}>Food Items</h3>

  <p style={{ color: "#666", lineHeight: "1.7", margin: "20px 0" }}>
    Donate rice, vegetables, fruits, milk and other food essentials.
  </p>

  <button className="btn btn-primary">
    Donate Food
  </button>
</div>

<div className="card" style={{ padding: "30px", textAlign: "center" }}>
  <h3 style={{ color: "#1F2937" }}>Essential Supplies</h3>

  <p style={{ color: "#666", lineHeight: "1.7", margin: "20px 0" }}>
    Support with clothing, hygiene kits and daily necessities.
  </p>

  <button className="btn btn-primary">
    Donate Supplies
  </button>
</div>

<div className="card" style={{ padding: "30px", textAlign: "center" }}>
  <h3 style={{ color: "#1F2937" }}>Volunteer</h3>

  <p style={{ color: "#666", lineHeight: "1.7", margin: "20px 0" }}>
    Help collect, organize and deliver donations to the orphanage.
  </p>

  <button className="btn btn-primary">
    Join as Volunteer
  </button>
</div>
  </div>
</section>


      {/* Recent Updates */}
      {/* Recent Updates */}

<section
  className="container"
  style={{
    padding: "70px 20px",
  }}
>
  <div
    style={{
      maxWidth: "900px",
      margin: "0 auto",
    }}
  >
    <h2
      style={{
        color: "#1F2937",
        marginBottom: "35px",
        fontSize: "2rem",
      }}
    >
      Recent Updates
    </h2>

    {[
      {
        date: "15 July 2026",
        update: "15 new contributors joined the campaign.",
      },
      {
        date: "12 July 2026",
        update: "Campaign reached 60% completion.",
      },
      {
        date: "10 July 2026",
        update: "First food distribution successfully completed.",
      },
    ].map((item) => (
      <div
        key={item.date}
        className="card"
        style={{
          padding: "24px",
          marginBottom: "20px",
        }}
      >
        <h4
          style={{
            color: "#2E7D32",
            marginBottom: "10px",
          }}
        >
          {item.date}
        </h4>

        <p
          style={{
            color: "#555",
            lineHeight: "1.7",
          }}
        >
          {item.update}
        </p>
      </div>
    ))}
  </div>
</section>

      {/* Contribute Button */}
      {/* Call To Action */}

<section
  style={{
    background: "linear-gradient(135deg,#2E7D32,#4CAF50)",
    padding: "80px 20px",
    textAlign: "center",
    color: "#fff",
  }}
>
  <div
    className="container"
    style={{
      maxWidth: "750px",
      margin: "0 auto",
    }}
  >
    <h2
      style={{
        fontSize: "2.3rem",
        marginBottom: "20px",
      }}
    >
      Ready to Make a Difference?
    </h2>

    <p
      style={{
        lineHeight: "1.8",
        marginBottom: "35px",
        opacity: "0.95",
      }}
    >
      Every contribution helps provide nutritious meals, reduces food waste,
      and brings hope to children in need. Join our community and create a
      lasting impact today.
    </p>

   <button
  className="btn"
  onClick={() => navigate("/contribute")}
  style={{
    background: "#fff",
    color: "#2E7D32",
    padding: "14px 34px",
    fontWeight: "600",
    borderRadius: "8px",
  }}
>
  Contribute Now
</button>

  </div>
</section>
    </div>
  );
}
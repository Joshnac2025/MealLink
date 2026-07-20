import React from "react";
import { useNavigate } from "react-router-dom";

export default function CommunityDashboard() {
  const navigate = useNavigate();
  return (
    <div>

      {/* Hero Section */}
<section
  style={{
    background: "linear-gradient(135deg,#eef9ee,#dff3df)",
    padding: "100px 20px",
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
        fontSize: "3rem",
        color: "var(--primary-dark)",
        marginBottom: "20px",
      }}
    >
      🤝 Community Campaigns
    </h1>

    <p
      style={{
        color: "var(--text-secondary)",
        fontSize: "1.15rem",
        lineHeight: "1.8",
        marginBottom: "40px",
      }}
    >
      Building Brighter Childhoods, Together.
      <br />
      Create meaningful campaigns and collaborate with the community to
      support orphanages through food, education, clothing, furniture,
      hygiene and celebrations.
    </p>

    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "20px",
        flexWrap: "wrap",
      }}
    >
      <button
  className="btn btn-primary"
  style={{
    padding: "14px 35px",
    fontSize: "16px",
  }}
>
        Start a Campaign
      </button>

      <button className="btn btn-outline">
        Explore Campaigns
      </button>
    </div>
  </div>
</section>

{/* Search & Filters */}

<section
  className="container"
  style={{
    padding: "60px 20px",
  }}
>
  <div
    className="card"
    style={{
      padding: "30px",
    }}
  >
    <h2
      style={{
        textAlign: "center",
        color: "var(--primary-dark)",
        marginBottom: "30px",
      }}
    >
      🔍 Find a Campaign
    </h2>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
        gap: "20px",
      }}
    >
      <input
  type="text"
  placeholder="🔍 Search Campaign..."
  style={{
    height: "50px",
    width: "100%",
    padding: "0 15px",
    border: "1px solid #ddd",
    borderRadius: "10px",
    fontSize: "15px",
    outline: "none",
    boxSizing: "border-box",
  }}
/>

    <select
  style={{
    height: "50px",
    width: "100%",
    padding: "0 15px",
    border: "1px solid #ddd",
    borderRadius: "10px",
    fontSize: "15px",
    outline: "none",
    background: "#fff",
    boxSizing: "border-box",
  }}
>
        <option>All Categories</option>
        <option> Food</option>
        <option> Education</option>
        <option> Clothes</option>
        <option> Furniture</option>
        <option> Hygiene</option>
        <option> Celebration</option>
      </select>

      <select
  style={{
    height: "50px",
    width: "100%",
    padding: "0 15px",
    border: "1px solid #ddd",
    borderRadius: "10px",
    fontSize: "15px",
    outline: "none",
    background: "#fff",
    boxSizing: "border-box",
  }}
>
        <option>All Locations</option>
        <option>Hyderabad</option>
        <option>Bengaluru</option>
        <option>Mysuru</option>
      </select>

      <select
  style={{
    height: "50px",
    width: "100%",
    padding: "0 15px",
    border: "1px solid #ddd",
    borderRadius: "10px",
    fontSize: "15px",
    outline: "none",
    background: "#fff",
    boxSizing: "border-box",
  }}
>
        <option>All Campaigns</option>
        <option>Near Completion</option>
        <option>Featured</option>
        <option>Active</option>
      </select>
    </div>

    <div
      style={{
        textAlign: "center",
        marginTop: "30px",
      }}
    >
    <button
  className="btn btn-primary"
  style={{
    padding: "14px 35px",
    fontSize: "16px",
  }}
>
        Search Campaigns
      </button>
    </div>
  </div>
</section>

      {/* Community Statistics */}

<section
  className="container"
  style={{
    padding: "70px 20px",
  }}
>
  <h2
    style={{
      textAlign: "center",
      marginBottom: "25px",
      color: "var(--primary-dark)",
    }}
  >
    Community Impact
  </h2>

  <p
  style={{
    textAlign: "center",
    color: "var(--text-secondary)",
    marginTop: "-20px",
    marginBottom: "45px",
    fontSize: "1rem",
  }}
>
  See how the MealLink community is making a difference together.
</p>

  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
      gap: "25px",
    }}
  >
    {
      [
  {
    icon: "📢",
    title: "Active Campaigns",
    value: "18",
    description: "Currently seeking contributors",
  },
  {
    icon: "✅",
    title: "Completed",
    value: "145",
    description: "Successfully delivered",
  },
  {
    icon: "🤝",
    title: "Contributors",
    value: "620",
    description: "Growing every day",
  },
  {
    icon: "🏠",
    title: "Partner Orphanages",
    value: "34",
    description: "Verified institutions",
  },
]
    .map((stat) => (
      <div
        key={stat.title}
        className="card"
        style={{
          textAlign: "center",
          padding: "35px",
        }}
      >
       
<h1
  style={{
    fontSize: "2rem",
    marginBottom: "10px",
  }}
>
  {stat.icon}
</h1>

<h2
  style={{
    color: "var(--primary-color)",
    fontSize: "3rem",
    margin: "10px 0",
  }}
>
  {stat.value}
</h2>

<h3
  style={{
    marginBottom: "8px",
  }}
>
  {stat.title}
</h3>

<p
  style={{
    color: "#666",
    fontSize: "0.95rem",
  }}
>
  {stat.description}
</p>
        <p>{stat.title}</p>
      </div>
    ))}
  </div>
</section>

      {/* Near Completion Campaigns */}
<section
  className="container"
  style={{
    padding: "24px 20px",
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
    Near Completion Campaigns
  </h2>

  <p
    style={{
      textAlign: "center",
      color: "var(--text-secondary)",
      maxWidth: "700px",
      margin: "0 auto 50px",
      lineHeight: "1.7",
    }}
  >
    These campaigns are close to reaching their goals. Your contribution can help them make an immediate impact.
  </p>

  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(340px,1fr))",
      gap: "30px",
    }}
  >
    {[
      {
        title: "Weekend Meal Campaign",
        orphanage: "Little Hearts Orphanage",
        location: "Bengaluru",
        children: 40,
        description: "Weekend meals for 40 children.",
        progress: 90,
        contributors: 14,
        days: 2,
      },
      {
        title: "School Starter Kits",
        orphanage: "Hope Children's Home",
        location: "Hyderabad",
        children: 60,
        description: "Books and stationery for 60 children.",
        progress: 82,
        contributors: 9,
        days: 4,
      },
      {
        title: "Winter Clothing Drive",
        orphanage: "Bright Future Home",
        location: "Mysuru",
        children: 35,
        description: "Warm clothes for 35 children.",
        progress: 88,
        contributors: 12,
        days: 3,
      },
    ].map((campaign) => (
      <div
        key={campaign.title}
        className="card"
        style={{
          borderRadius: "16px",
          background: "#fff",
          padding: "28px",
        }}
      >
        <div
  style={{
    display: "inline-block",
    background: "#EDF7ED",
    color: "#2E7D32",
    padding: "5px 12px",
    borderRadius: "20px",
    fontSize: "0.75rem",
    fontWeight: "600",
    marginBottom: "24px",
  }}
>
  Near Completion
</div>

<h3
  style={{
    color: "#1F2937",
    fontSize: "2rem",
    fontWeight: "700",
    lineHeight: "1.3",
    minHeight: "110px",   // keeps all cards aligned
    marginBottom: "20px",
  }}
>
  {campaign.title}
</h3>

<p
  style={{
    color: "#4B5563",
    marginBottom: "6px",
  }}
>
  {campaign.orphanage}
</p>

<p
  style={{
    color: "#4B5563",
    marginBottom: "6px",
  }}
>
  {campaign.location} • {campaign.children} Children
</p>

<p
  style={{
    margin: "24px 0",
    color: "#6B7280",
    lineHeight: "1.7",
    fontSize: "15px",
  }}
>
  {campaign.description}
</p>
        <p
          style={{
            fontWeight: "600",
            marginBottom: "8px",
            color: "var(--primary-dark)",
          }}
        >
          Contribution Progress
        </p>

        <div
          style={{
            height: "10px",
            background: "#eee",
            borderRadius: "20px",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              width: `${campaign.progress}%`,
              background: "#2E7D32",
              height: "100%",
            }}
          />
        </div>

        <p
          style={{
            marginTop: "8px",
            color: "#2E7D32",
            fontWeight: "600",
          }}
        >
          {campaign.progress}% Funded
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "20px",
            color: "#666",
          }}
        >
          <span> {campaign.contributors} Contributors</span>
          <span> {campaign.days} Days Left</span>
        </div>

        <div style={{ marginTop: "auto" }}>
        <button
  className="btn btn-primary"
  onClick={() => navigate("/campaign/1")}
>
  Contribute
        </button>
        </div>
      </div>
    ))}
  </div>
</section>

{/* Community Spotlight */}

<section
  className="container"
  style={{
    padding: "35px 20px",
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
    Community Spotlight
  </h2>

  <p
    style={{
      textAlign: "center",
      color: "var(--text-secondary)",
      marginBottom: "50px",
      maxWidth: "700px",
      marginLeft: "auto",
      marginRight: "auto",
      lineHeight: "1.7",
    }}
  >
    One of our most impactful community campaigns, chosen by contributors.
  </p>

  <div
    className="card"
    style={{
      padding: "45px",
      textAlign: "center",
      borderRadius: "18px",
      background: "#fff",
    }}
  >
    {/* Badge */}
    <div
      style={{
        display: "inline-block",
        background: "#FFF4E5",
        color: "#E67E22",
        padding: "8px 18px",
        borderRadius: "20px",
        fontWeight: "600",
        marginBottom: "25px",
      }}
    >
      Community Pick
    </div>

    {/* Title */}
    <h3
      style={{
        color: "var(--primary-dark)",
        fontSize: "2rem",
        marginBottom: "20px",
      }}
    >
      Children's Day Celebration
    </h3>

    {/* Details */}
    <p
      style={{
        margin: "6px 0",
        color: "#555",
      }}
    >
      Happy Kids Orphanage
    </p>

    <p
      style={{
        margin: "6px 0",
        color: "#555",
      }}
    >
      Hyderabad
    </p>

    <p
      style={{
        margin: "6px 0 25px",
        color: "#555",
      }}
    >
      120 Children
    </p>

    {/* Progress */}
    <div
      style={{
        width: "70%",
        margin: "0 auto",
      }}
    >
      <div
        style={{
          height: "10px",
          background: "#eee",
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

      <p
        style={{
          marginTop: "12px",
          color: "#2E7D32",
          fontWeight: "600",
        }}
      >
        72% Completed
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "25px",
          flexWrap: "wrap",
          marginTop: "10px",
          color: "#666",
        }}
      >
        <span>28 Contributors</span>
        <span>5 Days Left</span>
      </div>
    </div>

    {/* Description */}
    <p
      style={{
        margin: "30px auto",
        maxWidth: "850px",
        lineHeight: "1.8",
        color: "#555",
      }}
    >
      Help provide food, educational supplies, clothing, hygiene essentials,
      and celebration items to make Children's Day memorable for 120 children.
    </p>

    {/* Contributors */}
    <p
      style={{
        color: "#666",
        fontWeight: "500",
        marginBottom: "25px",
      }}
    >
      28 Community Contributors
    </p>

    {/* Button */}
   <button
  className="btn btn-primary"
  onClick={() => navigate("/campaign/1")}
>
  View Campaign →
</button>
  </div>
</section>   

{/* Explore Campaigns */}

<section
  className="container"
  style={{
    padding: "100px 20px",
  }}
>
  <h2
    style={{
      textAlign: "center",
      color: "var(--primary-dark)",
      marginBottom: "15px",
      fontSize: "2.2rem",
    }}
  >
     Explore Campaigns
  </h2>

  <p
    style={{
      textAlign: "center",
      color: "var(--text-secondary)",
      maxWidth: "700px",
      margin: "0 auto 40px",
      lineHeight: "1.7",
    }}
  >
    Browse campaigns and contribute in the way that matters most to you.
  </p>

  {/* Categories */}
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap",
      gap: "12px",
      marginBottom: "40px",
    }}
  >
    {[
      "Food",
      "Snacks",
      "Books",
      "Clothes",
      "Furniture",
      "Hygiene",
      "Celebration",
    ].map((category) => (
      <button
        key={category}
        className="btn btn-outline"
        style={{
          borderRadius: "30px",
          padding: "10px 18px",
        }}
      >
        {category}
      </button>
    ))}
  </div>

  {/* Campaign Cards */}
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
      gap: "30px",
    }}
  >

    {[
  {
    title: "Healthy Meal Drive",
    orphanage: "Little Hearts Orphanage",
    location: "Hyderabad",
    children: 45,
  },
  {
    title: "Back to School Support",
    orphanage: "Hope Children's Home",
    location: "Bengaluru",
    children: 60,
  },
  {
    title: "Festival Celebration",
    orphanage: "Bright Future Home",
    location: "Mysuru",
    children: 30,
  },
].map((campaign) => (
  <div
    key={campaign.title}
    className="card"
    style={{
      padding: "30px",
    }}
  >
    <h3
      style={{
        color: "var(--primary-dark)",
        marginBottom: "12px",
      }}
    >
      {campaign.title}
    </h3>

    <p>{campaign.orphanage}</p>

    <p>{campaign.location}</p>

    <p>{campaign.children} Children</p>

    <button
      className="btn btn-primary"
      onClick={() => navigate("/campaign/1")}
      style={{
        marginTop: "25px",
        width: "100%",
      }}
    >
      View Campaign →
    </button>
  </div>
))}

  </div>

  <div
    style={{
      textAlign: "center",
      marginTop: "45px",
    }}
  >
    <button className="btn btn-outline">
      Load More Campaigns
    </button>
  </div>
</section>

      {/* Success Stories */}

      {/* Success Stories */}

<section
  className="container"
  style={{
    padding: "60px 20px",
  }}
>
  <h2
    style={{
      textAlign: "center",
      color: "var(--primary-dark)",
      marginBottom: "15px",
    }}
  >
    ❤️ Success Stories
  </h2>

  <p
    style={{
      textAlign: "center",
      color: "var(--text-secondary)",
      marginBottom: "50px",
    }}
  >
    Together, we've created meaningful moments for children through community support.
  </p>

  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
      gap: "25px",
    }}
  >
    {[
      {
        title: "Weekend Meal Drive",
        orphanage: "Little Hearts Orphanage",
      },
      {
        title: "Back to School Campaign",
        orphanage: "Hope Children's Home",
      },
      {
        title: "Winter Clothing Support",
        orphanage: "Bright Future Home",
      },
    ].map((story) => (
      <div
        key={story.title}
        className="card"
        style={{
          padding: "30px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontSize: "3rem",
            marginBottom: "15px",
          }}
        >
          
        </div>

        <h3>{story.title}</h3>

        <p
          style={{
            color: "#666",
            margin: "10px 0",
          }}
        >
          {story.orphanage}
        </p>

        <p
          style={{
            color: "#666",
            lineHeight: "1.6",
          }}
        >
          Successfully completed with the support of our amazing community.
        </p>

        <button
          className="btn btn-outline"
          style={{
            marginTop: "20px",
          }}
        >
          Read Story →
        </button>
      </div>
    ))}
  </div>
</section>

    {/* Call To Action */}

<section
  style={{
    background: "linear-gradient(135deg,#eef9ee,#dff3df)",
    padding: "90px 20px",
    textAlign: "center",
    marginTop: "60px",
  }}
>
  <div className="container">
    <h2
      style={{
        fontSize: "2.5rem",
        color: "var(--primary-dark)",
        marginBottom: "20px",
      }}
    >
      Ready to Make a Difference?
    </h2>

    <p
      style={{
        maxWidth: "700px",
        margin: "0 auto 35px",
        color: "var(--text-secondary)",
        lineHeight: "1.8",
      }}
    >
      Start a campaign for a verified orphanage or contribute to an existing one.
      Together, we can bring smiles to children through food, books, clothes,
      furniture, hygiene essentials, and celebrations.
    </p>

    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "20px",
        flexWrap: "wrap",
      }}
    >
      <button className="btn btn-primary">
        Start a Campaign
      </button>

      <button className="btn btn-outline">
        Browse Campaigns
      </button>
    </div>
  </div>
</section>
    </div>
  );
}
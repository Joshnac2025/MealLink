import { useLocation, useNavigate } from "react-router-dom";

export default function AIRecommendation() {
  const location = useLocation();
  const navigate = useNavigate();

  const data = location.state;

  if (!data) {
    return <h2>No Recommendation Found</h2>;
  }

  const best = data.recommended_orphanage;

  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "40px auto",
        padding: "20px",
      }}
    >
      <h1>AI Recommended Orphanage</h1>

      <div
        style={{
          padding: 20,
          border: "1px solid #ddd",
          borderRadius: 10,
          marginTop: 20,
        }}
      >
        <h2>{best.name}</h2>

        <p>
          <b>AI Score:</b> {best.score}
        </p>

        <p>
          <b>Confidence:</b> {best.confidence}
        </p>

        <p>{best.explanation}</p>

        <h3>Reasons</h3>

        <ul>
          {best.reasons.map((r, i) => (
            <li key={i}>{r}</li>
          ))}
        </ul>

        <h3>Meal Coverage</h3>

        <p>Meals Available : {best.meal_coverage.meals_available}</p>

        <p>Children Served : {best.meal_coverage.children_served}</p>

        <p>
          Children Remaining :{" "}
          {best.meal_coverage.children_remaining}
        </p>

        <button
          onClick={() => {
            alert("Donation Accepted");
            navigate("/");
          }}
          style={{
            marginTop: 20,
            marginRight: 10,
          }}
        >
          Accept Recommendation
        </button>

        <button
          onClick={() => navigate("/contribute")}
          style={{
            marginTop: 20,
          }}
        >
          Cancel
        </button>
      </div>

      <h2 style={{ marginTop: 40 }}>
        Other Recommendations
      </h2>

      {data.other_recommendations.map((o) => (
        <div
          key={o.id}
          style={{
            border: "1px solid #ccc",
            borderRadius: 8,
            padding: 15,
            marginTop: 15,
          }}
        >
          <h3>{o.name}</h3>

          <p>Score : {o.score}</p>

          <p>{o.confidence}</p>

          <p>{o.explanation}</p>
        </div>
      ))}
    </div>
  );
}
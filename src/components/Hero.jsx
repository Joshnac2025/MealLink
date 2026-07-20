export default function Hero() {
  return (
    <div style={{ padding: "40px" }}>
      <h1 style={{ fontSize: "42px", fontWeight: "bold" }}>
        MealLink – Turning Surplus Into Smiles 😊
      </h1>
      <p style={{ fontSize: "18px" }}>
        Connecting donors and orphanages in real time.
      </p>
      <button
        style={{
          padding: "12px 20px",
          background: "blue",
          color: "white",
          borderRadius: "6px",
          marginTop: "20px",
          border: "none",
          cursor: "pointer",
        }}
      >
        Donate Now
      </button>
    </div>
  );
}
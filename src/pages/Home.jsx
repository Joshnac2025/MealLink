import React from "react";

export default function Home() {
  return (
    <section>
      <div className="py-12">
        <h2 className="text-4xl font-extrabold mb-4">Welcome to MealLink</h2>
        <p className="text-lg mb-6">Connecting donors and orphanages in real time — turn surplus into smiles.</p>
        <button className="px-4 py-2 bg-blue-600 text-white rounded">Donate Now</button>
      </div>
    </section>
  );
}
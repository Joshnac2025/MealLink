import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import heroImage from "../assets/hero-image.png";

export default function HomePage() {
  const { t } = useTranslation();
  const [stats, setStats] = useState({
    totalDonors: 0,
    totalOrphanages: 0,
    totalDonations: 0
  });

  useEffect(() => {
    // Fetch real-time stats from localStorage
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const donations = JSON.parse(localStorage.getItem('donations') || '[]');

    const donors = users.filter(u => u.userType === 'donor').length;
    const orphanages = users.filter(u => u.userType === 'orphanage').length;
    const donationsCount = donations.length;

    setStats({
      totalDonors: donors,
      totalOrphanages: orphanages,
      totalDonations: donationsCount
    });
  }, []);

  return (
    <div>
      {/* Hero Section */}
   <section className="hero">
 <div className="container hero-container">

    <div className="hero-text">
      <h1>
        Turning Surplus <br />
        into <span>Smiles 💚</span>
      </h1>

      <p>
        MealLink connects donors, orphanages and volunteers to reduce food
        waste and ensure every surplus meal reaches children in need.
      </p>

<div className="hero-buttons">
        <Link to="/register" className="btn btn-primary">
          Donate Now
        </Link>

        <Link to="/register" className="btn btn-outline">
          Register
        </Link>
      </div>
    </div>

    <div className="hero-image">

    <img
  src={heroImage}
  alt="MealLink Hero"
  style={{
    width: "100%",
    maxWidth: "500px",
    borderRadius: "12px"
  }}
/>
    </div>

  </div>   {/* <-- ADD THIS MISSING DIV */}
</section>
      
      {/* Features Section */}
      <section className="container mb-4">
        <h2 className="text-center mb-4" style={{ color: 'var(--text-primary)' }}>How It Works</h2>
        <div
  className="flex"
  style={{
    flexWrap: "wrap",
    gap: "30px",
    justifyContent: "center"
  }}
>
          <div className="card text-center" style={{ flex: 1, minWidth: '250px' }}>
            <div style={{ fontSize: '3rem', marginBottom: '10px' }}>🍲</div>
            <h3>Donate Food</h3>
            <p style={{ color: 'var(--text-secondary)' }}>Restaurants and individuals can donate surplus food easily.</p>
          </div>
          <div className="card text-center" style={{ flex: 1, minWidth: '250px' }}>
            <div style={{ fontSize: '3rem', marginBottom: '10px' }}>🏠</div>
            <h3>Orphanages Connect</h3>
            <p style={{ color: 'var(--text-secondary)' }}>Orphanages can view and accept donations in real-time.</p>
          </div>
          <div className="card text-center" style={{ flex: 1, minWidth: '250px' }}>
            <div style={{ fontSize: '3rem', marginBottom: '10px' }}>🎉</div>
            <h3>Celebrate</h3>
            <p style={{ color: 'var(--text-secondary)' }}>Sponsor meals for special occasions and spread joy.</p>
          </div>
        </div>
      </section>

      {/* Why Choose MealLink */}
<section className="why-section">
  <div className="container">
    <h2 className="text-center">Why Choose MealLink?</h2>

    <p
      className="text-center"
      style={{
        maxWidth: "700px",
        margin: "15px auto 50px",
        color: "var(--text-secondary)"
      }}
    >
      We make food donation simple, transparent, and impactful by connecting
      donors, orphanages, and volunteers on one trusted platform.
    </p>

    <div className="why-grid">

      <div className="card text-center">
        <div style={{ fontSize: "3rem" }}>🌱</div>
        <h3>Reduce Food Waste</h3>
        <p>
          Save perfectly good surplus food from going to waste.
        </p>
      </div>

      <div className="card text-center">
        <div style={{ fontSize: "3rem" }}>❤️</div>
        <h3>Feed Children</h3>
        <p>
          Ensure nutritious meals reach children in need.
        </p>
      </div>

      <div className="card text-center">
        <div style={{ fontSize: "3rem" }}>🤝</div>
        <h3>Trusted Community</h3>
        <p>
          Verified donors, orphanages, and volunteers working together.
        </p>
      </div>

      <div className="card text-center">
        <div style={{ fontSize: "3rem" }}>⚡</div>
        <h3>Fast & Easy</h3>
        <p>
          Donate or accept food in just a few clicks.
        </p>
      </div>

    </div>
  </div>
</section>

      {/* Stats Section - Real-time from localStorage */}
      <section style={{ background: 'var(--primary-dark)', color: 'white', padding: '60px 0', marginTop: '60px' }}>
        <div className="container text-center">
          <h2 className="mb-4">Our Impact</h2>
          <div
  className="flex justify-between"
  style={{
    maxWidth: "900px",
    margin: "0 auto",
    gap: "40px"
  }}
>
            <div>
              <div style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>{stats.totalDonations}+</div>
              <div>Donations Made</div>
            </div>
            <div>
              <div style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>{stats.totalDonors}+</div>
              <div>{t('admin.totalDonors')}</div>
            </div>
            <div>
              <div style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>{stats.totalOrphanages}+</div>
              <div>{t('admin.registeredOrphanages')}</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
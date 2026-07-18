import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function HomePage() {
  const [stats, setStats] = useState({
    donors: 0,
    orphanages: 0,
    donations: 0,
    mealsServed: 0
  });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Animate on mount
    setIsVisible(true);

    // Load stats from localStorage
    const loadStats = () => {
      try {
        const users = JSON.parse(localStorage.getItem('meallink_users') || '[]');
        const donations = JSON.parse(localStorage.getItem('meallink_donations') || '[]');

        const donorCount = users.filter(u => u.role === 'donor').length;
        const orphanageCount = users.filter(u => u.role === 'orphanage').length;
        const donationCount = donations.length;
        const mealsServed = donations.reduce((sum, d) => {
          const qty = parseInt(d.quantity) || 0;
          return sum + qty;
        }, 0);

        setStats({
          donors: donorCount,
          orphanages: orphanageCount,
          donations: donationCount,
          mealsServed: mealsServed || 500 // Default if no data
        });
      } catch (e) {
        console.error('Error loading stats', e);
      }
    };

    loadStats();
    // Refresh stats every 5 seconds
    const interval = setInterval(loadStats, 5000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: '🍲',
      title: 'Donate Food',
      description: 'Restaurants and individuals can donate surplus food easily.',
      color: '#4CAF50'
    },
    {
      icon: '🏠',
      title: 'Orphanages Connect',
      description: 'Orphanages can view and accept donations in real-time.',
      color: '#2196F3'
    },
    {
      icon: '🎉',
      title: 'Celebrate',
      description: 'Sponsor meals for special occasions and spread joy.',
      color: '#FF9800'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(135deg, #E8F5E9 0%, #C8E6C9 100%)',
        padding: '80px 0',
        textAlign: 'center',
        marginBottom: '40px',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: 'all 0.8s ease-out'
      }}>
        <div className="container">
          <h1 style={{
            fontSize: '3rem',
            color: 'var(--primary-dark)',
            marginBottom: '20px',
            fontWeight: '800'
          }}>
            Making Kindness Accessible
          </h1>
          <p style={{
            fontSize: '1.2rem',
            color: 'var(--text-secondary)',
            maxWidth: '600px',
            margin: '0 auto 40px'
          }}>
            Connect surplus food with those in need. Join our mission to eliminate hunger and reduce food waste.
          </p>
          <div className="flex justify-center gap-4" style={{ flexWrap: 'wrap' }}>
            <Link to="/register" className="btn btn-primary" style={{
              padding: '12px 30px',
              fontSize: '1.1rem',
              animation: 'pulse 2s infinite'
            }}>
              Start Donating
            </Link>
            <Link to="/events" className="btn btn-secondary" style={{ padding: '12px 30px', fontSize: '1.1rem' }}>
              View Events
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mb-4">
        <h2 className="text-center mb-4" style={{ color: 'var(--text-primary)' }}>How It Works</h2>
        <div className="flex gap-4" style={{ flexWrap: 'wrap' }}>
          {features.map((feature, index) => (
            <div
              key={index}
              className="card text-center"
              style={{
                flex: 1,
                minWidth: '250px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                borderTop: `4px solid ${feature.color}`,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transitionDelay: `${index * 0.2}s`
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
                e.currentTarget.style.boxShadow = '0 15px 30px rgba(0,0,0,0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = 'var(--shadow-md)';
              }}
            >
              <div style={{ fontSize: '3rem', marginBottom: '10px' }}>{feature.icon}</div>
              <h3 style={{ color: feature.color }}>{feature.title}</h3>
              <p style={{ color: 'var(--text-secondary)' }}>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Live Stats Section */}
      <section style={{
        background: 'linear-gradient(135deg, #1B5E20 0%, #2E7D32 100%)',
        color: 'white',
        padding: '60px 0',
        marginTop: '60px'
      }}>
        <div className="container text-center">
          <h2 className="mb-4">Our Live Impact 📊</h2>
          <div className="flex justify-between" style={{
            maxWidth: '900px',
            margin: '0 auto',
            flexWrap: 'wrap',
            gap: '20px'
          }}>
            {[
              { label: 'Meals Served', value: stats.mealsServed, icon: '🍽️' },
              { label: 'Donations', value: stats.donations, icon: '📦' },
              { label: 'Donors', value: stats.donors, icon: '❤️' },
              { label: 'Orphanages', value: stats.orphanages, icon: '🏠' }
            ].map((stat, index) => (
              <div
                key={index}
                style={{
                  flex: '1 1 200px',
                  padding: '20px',
                  background: 'rgba(255,255,255,0.1)',
                  borderRadius: '12px',
                  backdropFilter: 'blur(10px)',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.2)';
                  e.currentTarget.style.transform = 'scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                <div style={{ fontSize: '2rem', marginBottom: '10px' }}>{stat.icon}</div>
                <div style={{
                  fontSize: '2.5rem',
                  fontWeight: 'bold',
                  marginBottom: '5px'
                }}>
                  {stat.value}+
                </div>
                <div style={{ fontSize: '1rem', opacity: 0.9 }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="container" style={{
        textAlign: 'center',
        padding: '60px 0'
      }}>
        <h2 style={{ marginBottom: '20px', color: 'var(--primary-dark)' }}>
          Ready to Make a Difference?
        </h2>
        <p style={{
          fontSize: '1.1rem',
          color: 'var(--text-secondary)',
          marginBottom: '30px',
          maxWidth: '600px',
          margin: '0 auto 30px'
        }}>
          Join thousands of donors and organizations making an impact every day.
        </p>
        <Link
          to="/register"
          className="btn btn-primary"
          style={{
            padding: '15px 40px',
            fontSize: '1.2rem',
            boxShadow: '0 4px 15px rgba(46, 125, 50, 0.3)'
          }}
        >
          Get Started Now →
        </Link>
      </section>

      <style>{`
        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }
      `}</style>
    </div>
  );
}
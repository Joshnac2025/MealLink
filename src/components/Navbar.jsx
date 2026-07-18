import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Donor', path: '/donor' },
    { name: 'Orphanage', path: '/orphanage' },
    { name: 'Events', path: '/events' },
    // Admin link can be hidden or shown based on requirements, keeping it for now
    { name: 'Admin', path: '/admin' },
  ];

  return (
    <nav className="navbar" style={{
      background: 'var(--surface-color)',
      boxShadow: 'var(--shadow-sm)',
      position: 'sticky',
      top: 0,
      zIndex: 1000
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '70px'
      }}>
        <Link to="/" style={{
          fontSize: '1.5rem',
          fontWeight: '700',
          color: 'var(--primary-color)',
          display: 'flex',
          alignItems: 'center',
          gap: '10px'
        }}>
          MealLink
        </Link>

        {/* Desktop Menu */}
        <div className="desktop-menu" style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              style={{
                color: isActive(link.path) ? 'var(--primary-color)' : 'var(--text-secondary)',
                fontWeight: isActive(link.path) ? '600' : '500',
                padding: '8px 12px',
                borderRadius: 'var(--radius-sm)',
                backgroundColor: isActive(link.path) ? '#E8F5E9' : 'transparent',
              }}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/login" className="btn btn-primary" style={{ padding: '8px 20px' }}>
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}
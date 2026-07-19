
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

export default function Navbar() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Community", path: "/community" },
  { name: "Contact", path: "/contact" },
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
          {t('MealLink')}
        </Link>

        <button
  onClick={() => setIsOpen(!isOpen)}
  className="menu-btn"
>
  ☰
</button>

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
        <LanguageSwitcher />

        <Link to="/login" className="btn btn-secondary">
          Login
        </Link>

        <Link to="/register" className="btn btn-outline">
          Register
        </Link>

        <Link to="/register" className="btn btn-primary">
          Donate
        </Link>  
        </div>

        {isOpen && (
  <div className="mobile-menu">

    {navLinks.map((link) => (
      <Link
        key={link.name}
        to={link.path}
        onClick={() => setIsOpen(false)}
      >
        {link.name}
      </Link>
    ))}

    <Link to="/login">Login</Link>
    <Link to="/register">Register</Link>
    <Link to="/register">Donate</Link>

  </div>
)}
      </div>
    </nav>
  );
}